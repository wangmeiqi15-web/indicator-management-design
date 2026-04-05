import { tokenCollections, tokenSource } from "./design-token-data.js";

const app = document.getElementById("app");

if (!app) {
  throw new Error("Missing #app mount point.");
}

const state = {
  categoryId: tokenCollections[0].id,
  groupId: "all",
  query: "",
  view: "list",
  mode: "light",
  selectedToken: null,
};

function flattenTokens(collection) {
  return collection.groups.flatMap((group) =>
    group.tokens.map((token) => ({
      ...token,
      categoryId: collection.id,
      categoryLabel: collection.label,
      groupId: group.id,
      groupLabel: group.label,
      kind: collection.kind,
    })),
  );
}

const allTokens = tokenCollections.flatMap(flattenTokens);
state.selectedToken = allTokens[0];

function getCategory(categoryId) {
  return tokenCollections.find((item) => item.id === categoryId) ?? tokenCollections[0];
}

function getFilteredTokens() {
  const category = getCategory(state.categoryId);
  const tokens = flattenTokens(category);
  const normalizedQuery = state.query.trim().toLowerCase();

  return tokens.filter((token) => {
    const matchesGroup = state.groupId === "all" || token.groupId === state.groupId;
    if (!matchesGroup) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      token.name,
      token.path,
      token.alias,
      token.description,
      token.light,
      token.dark,
      token.value,
      token.alt,
      token.css,
      token.groupLabel,
      token.tier,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

function ensureSelectedToken() {
  const filteredTokens = getFilteredTokens();
  if (!filteredTokens.length) {
    state.selectedToken = null;
    return;
  }

  const selectedStillVisible = filteredTokens.some((token) => token.name === state.selectedToken?.name);
  if (!selectedStillVisible) {
    state.selectedToken = filteredTokens[0];
  }
}

function normalizeColor(value) {
  if (typeof value !== "string") {
    return value;
  }

  if (value.length === 9 && value.startsWith("#")) {
    const base = value.slice(0, 7);
    const alpha = Number.parseInt(value.slice(7, 9), 16) / 255;
    return `color-mix(in srgb, ${base} ${(alpha * 100).toFixed(0)}%, transparent)`;
  }

  return value;
}

function hexToRgb(value) {
  if (typeof value !== "string" || !value.startsWith("#")) {
    return null;
  }

  const normalized = value.length === 9 ? value.slice(0, 7) : value;
  const hex = normalized.replace("#", "");
  const fullHex = hex.length === 3 ? hex.split("").map((digit) => `${digit}${digit}`).join("") : hex;

  if (fullHex.length !== 6) {
    return null;
  }

  const number = Number.parseInt(fullHex, 16);
  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function toHsl(rgb) {
  if (!rgb) {
    return null;
  }

  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = 60 * (((g - b) / delta) % 6);
        break;
      case g:
        h = 60 * ((b - r) / delta + 2);
        break;
      default:
        h = 60 * ((r - g) / delta + 4);
        break;
    }
  }

  if (h < 0) {
    h += 360;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function relativeLuminance(rgb) {
  if (!rgb) {
    return 0;
  }

  const transform = (channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  const r = transform(rgb.r);
  const g = transform(rgb.g);
  const b = transform(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(foreground, background) {
  const fg = relativeLuminance(hexToRgb(foreground));
  const bg = relativeLuminance(hexToRgb(background));
  const light = Math.max(fg, bg);
  const dark = Math.min(fg, bg);
  return ((light + 0.05) / (dark + 0.05)).toFixed(2);
}

function formatMetric(token, field) {
  const value = token[field];
  if (value === undefined || value === null) {
    return "—";
  }

  if (token.unit === "px" && typeof value === "number") {
    return `${value}px`;
  }

  if (token.unit === "s" && typeof value === "number") {
    return `${value.toFixed(1)}s`;
  }

  if (token.unit === "ratio" && typeof value === "number") {
    return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  }

  return String(value);
}

function collectExportPayload() {
  return {
    source: tokenSource,
    category: getCategory(state.categoryId).label,
    group: state.groupId,
    query: state.query,
    exportedAt: new Date().toISOString(),
    tokens: getFilteredTokens(),
  };
}

function exportJson() {
  const payload = JSON.stringify(collectExportPayload(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.categoryId}-tokens.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function renderSidebar(category, filteredTokens) {
  const groups = category.groups.map((group) => ({
    ...group,
    count: filteredTokens.filter((token) => token.groupId === group.id).length,
  }));

  return `
    <aside class="sidebar-panel">
      <div class="brand-block">
        <p class="eyebrow">Local Design System</p>
        <h1>Claude Token Atlas</h1>
        <p class="brand-caption">Source: ${tokenSource.title}</p>
      </div>

      <label class="search-box" for="token-search">
        <span>搜索 DesignToken...</span>
        <input id="token-search" type="search" value="${state.query}" placeholder="输入名称、路径或别名" />
      </label>

      <section class="sidebar-section">
        <div class="sidebar-heading">
          <span>TOKEN 分类</span>
        </div>
        ${tokenCollections
          .map(
            (item) => `
              <button class="nav-item ${item.id === state.categoryId ? "is-active" : ""}" type="button" data-category="${item.id}">
                <span>${item.label}</span>
                <strong>${item.count}</strong>
              </button>
            `,
          )
          .join("")}
      </section>

      <section class="sidebar-section">
        <div class="sidebar-heading">
          <span>TOKEN 组</span>
        </div>
        <button class="nav-item ${state.groupId === "all" ? "is-active" : ""}" type="button" data-group="all">
          <span>全部</span>
          <strong>${filteredTokens.length}</strong>
        </button>
        ${groups
          .map(
            (group) => `
              <button class="nav-item ${group.id === state.groupId ? "is-active" : ""}" type="button" data-group="${group.id}">
                <span>${group.label}</span>
                <strong>${group.count}</strong>
              </button>
            `,
          )
          .join("")}
      </section>

      <div class="sidebar-footer">
        <button class="mode-chip ${state.mode === "light" ? "is-active" : ""}" type="button" data-mode="light">Light Mode</button>
        <button class="mode-chip ${state.mode === "dark" ? "is-active" : ""}" type="button" data-mode="dark">Dark Mode</button>
      </div>
    </aside>
  `;
}

function renderListView(tokens, kind) {
  if (!tokens.length) {
    return `
      <div class="empty-state">
        <h3>没有匹配结果</h3>
        <p>换一个关键词，或者切回全部分组看看。</p>
      </div>
    `;
  }

  const headers =
    kind === "color"
      ? `
          <div>NAME</div>
          <div>PATH</div>
          <div>LIGHT</div>
          <div>DARK</div>
          <div>ALIAS</div>
        `
      : `
          <div>NAME</div>
          <div>PATH</div>
          <div>VALUE</div>
          <div>ALT</div>
          <div>ALIAS</div>
        `;

  return `
    <div class="token-table">
      <div class="token-table-header">${headers}</div>
      ${tokens
        .map((token) => {
          const isSelected = token.name === state.selectedToken?.name;
          const firstValue =
            kind === "color"
              ? `
                  <span class="value-chip">
                    <span class="swatch" style="--swatch:${normalizeColor(token.light)}"></span>
                    <span>${token.light}</span>
                  </span>
                `
              : `<span class="plain-value">${formatMetric(token, "value")}</span>`;
          const secondValue =
            kind === "color"
              ? `
                  <span class="value-chip">
                    <span class="swatch" style="--swatch:${normalizeColor(token.dark)}"></span>
                    <span>${token.dark}</span>
                  </span>
                `
              : `<span class="plain-value">${formatMetric(token, "alt")}</span>`;

          return `
            <button class="token-row ${isSelected ? "is-selected" : ""}" type="button" data-token="${token.name}">
              <div class="token-name-cell">
                <span class="token-pill token-pill--${token.tier.toLowerCase()}">${token.tier}</span>
                <strong>${token.name}</strong>
              </div>
              <div class="token-path">${token.path}</div>
              <div>${firstValue}</div>
              <div>${secondValue}</div>
              <div class="token-alias">${token.alias ?? "—"}</div>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderGridView(tokens, kind) {
  if (!tokens.length) {
    return `
      <div class="empty-state">
        <h3>没有匹配结果</h3>
        <p>换一个关键词，或者切回全部分组看看。</p>
      </div>
    `;
  }

  return `
    <div class="token-grid">
      ${tokens
        .map((token) => {
          const isSelected = token.name === state.selectedToken?.name;
          const preview =
            kind === "color"
              ? `<div class="token-grid-swatch" style="--light:${normalizeColor(token.light)}; --dark:${normalizeColor(token.dark)}"></div>`
              : `<div class="token-grid-metric">${formatMetric(token, "value")}</div>`;

          return `
            <button class="token-card ${isSelected ? "is-selected" : ""}" type="button" data-token="${token.name}">
              ${preview}
              <span class="token-pill token-pill--${token.tier.toLowerCase()}">${token.tier}</span>
              <strong>${token.name}</strong>
              <span>${token.alias ?? token.path}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDetailPanel(token) {
  if (!token) {
    return `
      <aside class="detail-panel">
        <div class="detail-empty">
          <h2>选择一个 token</h2>
          <p>右侧会显示对应的 Light / Dark 数值、CSS 变量和说明。</p>
        </div>
      </aside>
    `;
  }

  const isColor = token.kind === "color" || token.unit === "color";
  const activeValue = state.mode === "light" ? token.light ?? token.value : token.dark ?? token.alt;
  const rgb = typeof activeValue === "string" ? hexToRgb(activeValue) : null;
  const hsl = toHsl(rgb);
  const whiteContrast = isColor && typeof activeValue === "string" ? contrastRatio(activeValue, "#FFFFFF") : null;
  const blackContrast = isColor && typeof activeValue === "string" ? contrastRatio(activeValue, "#000000") : null;

  return `
    <aside class="detail-panel">
      <div class="detail-header">
        <p class="eyebrow">${token.categoryLabel}</p>
        <h2>${token.name}</h2>
        <p>${token.path}</p>
      </div>

      <div class="detail-preview ${state.mode}">
        ${
          isColor
            ? `
              <div class="preview-swatch-large" style="--preview:${normalizeColor(activeValue)}"></div>
              <div class="preview-meta">
                <span>当前值</span>
                <strong>${activeValue}</strong>
              </div>
            `
            : `
              <div class="preview-metric-large">${formatMetric(token, state.mode === "light" ? "value" : "alt")}</div>
              <div class="preview-meta">
                <span>当前模式</span>
                <strong>${state.mode === "light" ? "Default" : "Alt"}</strong>
              </div>
            `
        }
      </div>

      <div class="detail-section">
        <div class="mode-row">
          <button class="mode-chip ${state.mode === "light" ? "is-active" : ""}" type="button" data-mode="light">Light</button>
          <button class="mode-chip ${state.mode === "dark" ? "is-active" : ""}" type="button" data-mode="dark">Dark</button>
        </div>
      </div>

      <div class="detail-section detail-kv">
        <div><span>TIER</span><strong>${token.tier}</strong></div>
        <div><span>ALIAS</span><strong>${token.alias ?? "—"}</strong></div>
        <div><span>LIGHT</span><strong>${token.light ?? formatMetric(token, "value")}</strong></div>
        <div><span>DARK</span><strong>${token.dark ?? formatMetric(token, "alt")}</strong></div>
        <div><span>CSS</span><strong>${token.css ?? "—"}</strong></div>
        <div><span>GROUP</span><strong>${token.groupLabel}</strong></div>
      </div>

      ${
        isColor && rgb && hsl
          ? `
            <div class="detail-section detail-kv">
              <div><span>RGB</span><strong>${rgb.r}, ${rgb.g}, ${rgb.b}</strong></div>
              <div><span>HSL</span><strong>${hsl.h}°, ${hsl.s}%, ${hsl.l}%</strong></div>
              <div><span>对比度 / 白</span><strong>${whiteContrast}:1</strong></div>
              <div><span>对比度 / 黑</span><strong>${blackContrast}:1</strong></div>
            </div>
          `
          : ""
      }

      <div class="detail-section">
        <span class="detail-label">说明</span>
        <p class="detail-description">${token.description}</p>
      </div>

      <div class="detail-section">
        <span class="detail-label">代码</span>
        <pre class="code-block"><code>${token.css ?? "// no css variable"}
${
  isColor
    ? `${state.mode === "light" ? token.light : token.dark}`
    : formatMetric(token, state.mode === "light" ? "value" : "alt")
}</code></pre>
      </div>
    </aside>
  `;
}

function render() {
  ensureSelectedToken();
  const category = getCategory(state.categoryId);
  const filteredTokens = getFilteredTokens();
  const activeGroup = category.groups.find((group) => group.id === state.groupId);
  const subtitle = activeGroup ? activeGroup.label : category.description;

  app.innerHTML = `
    <div class="token-browser-shell">
      ${renderSidebar(category, filteredTokens)}

      <main class="workspace-panel">
        <header class="workspace-header">
          <div>
            <p class="eyebrow">Ant Design Inspired System</p>
            <h2>${category.label} <span>${filteredTokens.length} tokens</span></h2>
            <p>${subtitle}</p>
          </div>
          <div class="workspace-actions">
            <button class="view-toggle ${state.view === "grid" ? "is-active" : ""}" type="button" data-view="grid">Grid</button>
            <button class="view-toggle ${state.view === "list" ? "is-active" : ""}" type="button" data-view="list">List</button>
            <button class="export-button" type="button" data-export="json">Export</button>
          </div>
        </header>

        <section class="workspace-body">
          <div class="workspace-meta">
            <span>Reference</span>
            <strong>${tokenSource.path}</strong>
          </div>
          ${
            state.view === "list"
              ? renderListView(filteredTokens, category.kind)
              : renderGridView(filteredTokens, category.kind)
          }
        </section>
      </main>

      ${renderDetailPanel(state.selectedToken)}
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  app.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.categoryId = button.dataset.category;
      state.groupId = "all";
      render();
    });
  });

  app.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      state.groupId = button.dataset.group;
      render();
    });
  });

  app.querySelectorAll("[data-token]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextToken = allTokens.find((token) => token.name === button.dataset.token);
      if (nextToken) {
        state.selectedToken = nextToken;
        render();
      }
    });
  });

  app.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
    });
  });

  app.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });

  const searchInput = app.querySelector("#token-search");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      render();
    });
  }

  const exportButton = app.querySelector("[data-export='json']");
  exportButton?.addEventListener("click", exportJson);
}

render();
