# 指标管理平台 — Design System 设计规范

> 基于 Figma 源文件提取，适用于设计与开发协作。  
> Token 命名格式：`--[类别]-[名称]-[数值]`

---

## 1. 颜色系统 Color System

### 1.1 Primary 品牌色（Daybreak Blue）

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Primary/1` | `var(--color-primary-1)` | `#E6F7FF` | 最浅品牌底色，选中/悬浮底 |
| `Primary/2` | `var(--color-primary-2)` | `#BAE7FF` | 浅阶层，卡片高亮背景 |
| `Primary/3` | `var(--color-primary-3)` | `#91D5FF` | hover 边界、弱标签 |
| `Primary/4` | `var(--color-primary-4)` | `#69C0FF` | 中浅层，按压前状态 |
| `Primary/5` | `var(--color-primary-5)` | `#40A9FF` | 高可见度品牌层 |
| `Primary/6` | `var(--color-primary-6)` | `#1890FF` | **品牌标准主色** |
| `DayBreak Blue/7` | `var(--color-primary-7)` | `#096DD9` | active 态与深色标题 |

```css
:root {
  --color-primary-1: #E6F7FF;
  --color-primary-2: #BAE7FF;
  --color-primary-3: #91D5FF;
  --color-primary-4: #69C0FF;
  --color-primary-5: #40A9FF;
  --color-primary-6: #1890FF;
  --color-primary-7: #096DD9;
}

/* 使用示例 */
.btn-primary {
  background: var(--color-primary-6);
  color: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
}
.card-selected {
  background: var(--color-primary-1);
  border: 1px solid var(--color-primary-3);
}
```

### 1.2 Neutral 中性色

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Neutral/1` | `var(--color-neutral-1)` | `#FFFFFF` | 白色背景 |
| `Neutral/2` | `var(--color-neutral-2)` | `#FAFAFA` | 替代/分组背景 |
| `Neutral/3` | `var(--color-neutral-3)` | `#F5F5F5` | 禁用背景、hover 底 |
| `Neutral/4` | `var(--color-neutral-4)` | `#F0F0F0` | 分隔线、弱边框 |
| `Neutral/5` | `var(--color-neutral-5)` | `#D9D9D9` | 标准边框 |
| `Neutral/6` | `var(--color-neutral-6)` | `#BFBFBF` | 禁用文本、placeholder |
| `Neutral/7` | `var(--color-neutral-7)` | `#8C8C8C` | 弱化信息文本 |
| `Neutral/8` | `var(--color-neutral-8)` | `#595959` | 辅助说明文案 |
| `Neutral/9` | `var(--color-neutral-9)` | `#434343` | 深色辅助文本 |
| `Neutral/10` | `var(--color-neutral-10)` | `#262626` | 标题/强调文案 |
| `Neutral/11` | `var(--color-neutral-11)` | `#1F1F1F` | 极深文本 |
| `Neutral/12` | `var(--color-neutral-12)` | `#141414` | 接近纯黑 |
| `Neutral/13` | `var(--color-neutral-13)` | `#000000` | 纯黑 |

```css
:root {
  --color-neutral-1: #FFFFFF;
  --color-neutral-2: #FAFAFA;
  --color-neutral-3: #F5F5F5;
  --color-neutral-4: #F0F0F0;
  --color-neutral-5: #D9D9D9;
  --color-neutral-6: #BFBFBF;
  --color-neutral-7: #8C8C8C;
  --color-neutral-8: #595959;
  --color-neutral-9: #434343;
  --color-neutral-10: #262626;
  --color-neutral-11: #1F1F1F;
  --color-neutral-12: #141414;
  --color-neutral-13: #000000;
}
```

### 1.3 Character 文本语义色

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `Character/Title .85` | `var(--color-text-title)` | `rgba(0, 0, 0, 0.85)` | 标题文案 |
| `Character/Primary .85` | `var(--color-text-primary)` | `rgba(0, 0, 0, 0.85)` | 正文主文案 |
| `Character/Secondary .45` | `var(--color-text-secondary)` | `rgba(0, 0, 0, 0.45)` | 辅助说明 |
| `Character/Disabled .25` | `var(--color-text-disabled)` | `rgba(0, 0, 0, 0.25)` | 禁用/placeholder |
| `Character/Primary(inverse)` | `var(--color-text-inverse)` | `#FFFFFF` | 反色文本（深底白字） |
| `Character/mark` | `var(--color-text-mark)` | `#000000` | 标记文本 |

```css
:root {
  --color-text-title: rgba(0, 0, 0, 0.85);
  --color-text-primary: rgba(0, 0, 0, 0.85);
  --color-text-secondary: rgba(0, 0, 0, 0.45);
  --color-text-disabled: rgba(0, 0, 0, 0.25);
  --color-text-inverse: #FFFFFF;
}

/* 文本层级 */
h1, h2, h3 { color: var(--color-text-title); }
p { color: var(--color-text-primary); }
.description { color: var(--color-text-secondary); }
.disabled { color: var(--color-text-disabled); }
```

### 1.4 Semantic 语义色

#### Dust Red — 错误/危险

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Dust Red/1` | `var(--color-error-1)` | `#FFF1F0` | 错误底色 |
| `Dust Red/3` | `var(--color-error-3)` | `#FFA39E` | 错误边框 |
| `Dust Red/5` | `var(--color-error-5)` | `#FF4D4F` | 错误强调/badge |
| `Dust Red/6` | `var(--color-error-6)` | `#F5222D` | 错误主色 |

#### Sunset Orange — 警告

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Sunset Orange/1` | `var(--color-warning-1)` | `#FFF7E6` | 警告底色 |
| `Sunset Orange/3` | `var(--color-warning-3)` | `#FFD591` | 警告边框 |
| `Sunset Orange/5` | `var(--color-warning-5)` | `#FFA940` | 警告强调 |
| `Sunset Orange/6` | `var(--color-warning-6)` | `#FA8C16` | 警告主色 |

#### Polar Green — 成功

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Polar Green/1` | `var(--color-success-1)` | `#F6FFED` | 成功底色 |
| `Polar Green/3` | `var(--color-success-3)` | `#B7EB8F` | 成功边框 |
| `Polar Green/6` | `var(--color-success-6)` | `#52C41A` | 成功主色 |
| `Polar Green/7` | `var(--color-success-7)` | `#389E0D` | 成功深色 |

#### Golden Purple — 标签/分类

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Golden Purple/1` | `var(--color-purple-1)` | `#F9F0FF` | 紫色底色 |
| `Golden Purple/3` | `var(--color-purple-3)` | `#D3ADF7` | 紫色边框 |
| `Golden Purple/5` | `var(--color-purple-5)` | `#9254DE` | 紫色强调 |
| `Golden Purple/6` | `var(--color-purple-6)` | `#722ED1` | 紫色主色 |

#### Cyan — 信息/辅助

| Token 名 | CSS 变量 | Hex 值 | 说明 |
|---|---|---|---|
| `Cyan/1` | `var(--color-cyan-1)` | `#E6FFFB` | 青色底色 |
| `Cyan/6` | `var(--color-cyan-6)` | `#13C2C2` | 青色主色 |
| `Cyan/7` | `var(--color-cyan-7)` | `#08979C` | 青色深色 |

```css
:root {
  /* Error / Dust Red */
  --color-error-1: #FFF1F0;
  --color-error-3: #FFA39E;
  --color-error-5: #FF4D4F;
  --color-error-6: #F5222D;

  /* Warning / Sunset Orange */
  --color-warning-1: #FFF7E6;
  --color-warning-3: #FFD591;
  --color-warning-5: #FFA940;
  --color-warning-6: #FA8C16;

  /* Success / Polar Green */
  --color-success-1: #F6FFED;
  --color-success-3: #B7EB8F;
  --color-success-6: #52C41A;
  --color-success-7: #389E0D;

  /* Purple / Golden Purple */
  --color-purple-1: #F9F0FF;
  --color-purple-3: #D3ADF7;
  --color-purple-5: #9254DE;
  --color-purple-6: #722ED1;

  /* Cyan */
  --color-cyan-1: #E6FFFB;
  --color-cyan-6: #13C2C2;
  --color-cyan-7: #08979C;
}

/* 语义色使用示例 */
.alert-error {
  background: var(--color-error-1);
  border: 1px solid var(--color-error-3);
  color: var(--color-error-6);
}
.tag-success {
  background: var(--color-success-1);
  border: 1px solid var(--color-success-3);
  color: var(--color-success-7);
}
```

### 1.5 Conditional 条件色

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `Conditional/page-background` | `var(--color-bg-page)` | `#F0F2F5` | 页面底色 |
| `Conditional/pop-over` | `var(--color-bg-popover)` | `#FFFFFF` | 浮层背景 |
| `Conditional/sider-background` | `var(--color-bg-sider)` | `#FFFFFF` | 侧边栏背景 |
| `Conditional/item-background-hover` | `var(--color-bg-hover)` | `#F5F5F5` | 列表 hover 底 |
| `Conditional/divider` | `var(--color-divider)` | `rgba(0, 0, 0, 0.06)` | 分隔线 |
| `Tooltip/.75` | `var(--color-tooltip-bg)` | `rgba(0, 0, 0, 0.75)` | Tooltip 背景 |

```css
:root {
  --color-bg-page: #F0F2F5;
  --color-bg-popover: #FFFFFF;
  --color-bg-sider: #FFFFFF;
  --color-bg-hover: #F5F5F5;
  --color-divider: rgba(0, 0, 0, 0.06);
  --color-tooltip-bg: rgba(0, 0, 0, 0.75);
}
```

---

## 2. 字体规范 Typography

### 2.1 字体栈

```css
--font-family-base: "MiSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-family-mono: "Roboto Mono", "SF Mono", "Fira Code", Consolas, monospace;
```

### 2.2 字号体系 Type Scale

| 样式名 | CSS 变量 | 字号 | 字重 | 行高 | 用途 |
|---|---|---|---|---|---|
| — | `var(--font-size-10)` | `10px` | 305 | 1.6 (16px) | 图表坐标轴、辅助注释 |
| `Footnote/description` | `var(--font-size-12)` | `12px` | 305 | 1.667 (20px) | 脚注、描述、角标 |
| `Footnote/system-monospace` | `var(--font-size-12-mono)` | `12px` | 400 | 1.667 (20px) | 等宽数字/代码 |
| `Body/regular` | `var(--font-size-14)` | `14px` | 330 | 1.571 (22px) | **默认正文** |
| `Body/medium` | `var(--font-size-14-medium)` | `14px` | 380 | 1.571 (22px) | 强调正文/标签 |
| `H5/regular` | `var(--font-size-16)` | `16px` | 330 | 1.5 (24px) | 小标题/卡片标题 |
| `H5/medium` | `var(--font-size-16-medium)` | `16px` | 380 | 1.5 (24px) | 强调小标题 |
| — | `var(--font-size-18)` | `18px` | 450 | 1.778 (32px) | 品牌/Logo 文案 |
| — | `var(--font-size-24)` | `24px` | 380 | 1.667 (40px) | 大数字展示 |
| — | `var(--font-size-30)` | `30px` | 380 | 1.333 (40px) | 数据卡片大标题 |

### 2.3 字重 Font Weight

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `Light` | `var(--font-weight-light)` | `305` | 脚注、描述文本 |
| `Regular` | `var(--font-weight-regular)` | `330` | **默认正文** |
| `Medium` | `var(--font-weight-medium)` | `380` | 标签、强调文案 |
| `Semibold` | `var(--font-weight-semibold)` | `450` | 品牌文案、重要标题 |

### 2.4 行高 Line Height

| 字号 | 行高比例 | 行高值 |
|---|---|---|
| 10px | 1.6 / 2.2 | 16px / 22px |
| 12px | 1.667 | 20px |
| 14px | 1.571 | 22px |
| 16px | 1.5 | 24px |
| 18px | 1.778 | 32px |
| 24px | 1.667 | 40px |
| 30px | 1.333 | 40px |

```css
:root {
  /* Font Family */
  --font-family-base: "MiSans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Roboto Mono", "SF Mono", "Fira Code", Consolas, monospace;

  /* Font Size */
  --font-size-10: 10px;
  --font-size-12: 12px;
  --font-size-14: 14px;
  --font-size-16: 16px;
  --font-size-18: 18px;
  --font-size-24: 24px;
  --font-size-30: 30px;

  /* Font Weight (MiSans) */
  --font-weight-light: 305;
  --font-weight-regular: 330;
  --font-weight-medium: 380;
  --font-weight-semibold: 450;

  /* Line Height */
  --line-height-12: 1.6667;  /* 20px */
  --line-height-14: 1.5714;  /* 22px */
  --line-height-16: 1.5;     /* 24px */
  --line-height-18: 1.7778;  /* 32px */
  --line-height-24: 1.6667;  /* 40px */
  --line-height-30: 1.3333;  /* 40px */
}

/* 排版示例 */
body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-14);
  color: var(--color-text-primary);
}

h1, .heading-xl { font-size: var(--font-size-30); font-weight: var(--font-weight-medium); line-height: var(--line-height-30); }
h2, .heading-lg { font-size: var(--font-size-24); font-weight: var(--font-weight-medium); line-height: var(--line-height-24); }
h3, .heading-md { font-size: var(--font-size-18); font-weight: var(--font-weight-semibold); line-height: var(--line-height-18); }
h4, h5, .heading-sm { font-size: var(--font-size-16); font-weight: var(--font-weight-medium); line-height: var(--line-height-16); }

.caption { font-size: var(--font-size-12); font-weight: var(--font-weight-light); line-height: var(--line-height-12); }
.code { font-family: var(--font-family-mono); font-size: var(--font-size-12); }
```

---

## 3. 间距系统 Spacing

基础单位：**4px**，间距值遵循 4px 倍数递增。

### 3.1 Space Scale

| Token 名 | CSS 变量 | 值 | 来源 | 说明 |
|---|---|---|---|---|
| `spacing-1` | `var(--spacing-1)` | `4px` | gap/padding | 最小单位，图标间微调 |
| `spacing-2` | `var(--spacing-2)` | `8px` | gap: 8px | 紧凑间距，图标+文案 |
| `spacing-3` | `var(--spacing-3)` | `12px` | gap/padding: 12px | 组件内部间距、列表项间距 |
| `spacing-4` | `var(--spacing-4)` | `16px` | gap/padding: 16px | **基准间距**，导航项/容器 |
| `spacing-5` | `var(--spacing-5)` | `20px` | padding: 20px | 模块内主要分隔 |
| `spacing-6` | `var(--spacing-6)` | `24px` | gap/padding: 24px | 区块间距、卡片内部 |
| `spacing-8` | `var(--spacing-8)` | `32px` | gap: 32px | 大区块间距 |

### 3.2 常用 padding 组合

| 场景 | padding | CSS |
|---|---|---|
| 按钮（标准） | `4px 15px` | `padding: var(--spacing-1) 15px;` |
| 按钮（紧凑） | `5px 16px` | `padding: 5px var(--spacing-4);` |
| 输入框 | `4px 12px` | `padding: var(--spacing-1) var(--spacing-3);` |
| 表格行 | `12px` | `padding: var(--spacing-3);` |
| 表头 | `14px 12px` | `padding: 14px var(--spacing-3);` |
| 卡片内容 | `20px` ~ `24px` | `padding: var(--spacing-5);` |
| 页面边距 | `16px` | `padding: 0 var(--spacing-4);` |
| Tooltip | `6px 8px` | `padding: 6px var(--spacing-2);` |
| Tag | `1px 8px` | `padding: 1px var(--spacing-2);` |
| 菜单项 | `5px 12px` | `padding: 5px var(--spacing-3);` |

```css
:root {
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
}

/* 间距使用示例 */
.card {
  padding: var(--spacing-6);             /* 24px */
  margin-bottom: var(--spacing-4);       /* 16px */
}
.list-item {
  padding: var(--spacing-3);             /* 12px */
  gap: var(--spacing-2);                 /* 8px */
}
.page-content {
  padding: var(--spacing-5) var(--spacing-4); /* 20px 16px */
}
```

---

## 4. 圆角 Border Radius

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `radius-sm` | `var(--radius-sm)` | `2px` | **默认圆角**，按钮/输入框/卡片 |
| `radius-md` | `var(--radius-md)` | `4px` | 较大容器、下拉菜单 |
| `radius-full` | `var(--radius-full)` | `100px` | 胶囊形（Tag/Badge/Switch） |

```css
:root {
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-full: 100px;
}

/* 圆角使用 */
.btn { border-radius: var(--radius-sm); }
.card { border-radius: var(--radius-md); }
.tag { border-radius: var(--radius-sm); }
.badge { border-radius: var(--radius-full); }
.avatar { border-radius: var(--radius-full); }
```

---

## 5. 阴影 Shadow

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `drop-shadow/button-primary` | `var(--shadow-button-primary)` | `0px 2px 0px 0px rgba(0,0,0,0.04)` | 主按钮阴影 |
| `drop-shadow/button-secondary` | `var(--shadow-button-secondary)` | `0px 2px 0px 0px rgba(0,0,0,0.02)` | 次按钮阴影 |
| `drop-shadow/0.15` | `var(--shadow-dropdown)` | `0px 2px 8px 0px rgba(0,0,0,0.15)` | 下拉/Tooltip 阴影 |
| `drop-shadow/0.12+0.8+0.5` | `var(--shadow-modal)` | `0 9px 28px 8px rgba(0,0,0,0.05), 0 6px 16px rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12)` | 弹窗/对话框阴影 |
| `drop-shadow/active-2px-spread` | `var(--shadow-focus)` | `0px 0px 0px 2px rgba(24,144,255,0.2)` | 焦点态光晕 |

### 分隔线 Border Effects

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `border & divider/divider ↓` | `var(--border-divider-bottom)` | `inset 0px -1px 0px 0px rgba(240,240,240,1)` | 底部分隔线 |
| `border & divider/divider ↑` | `var(--border-divider-top)` | `inset 0px 1px 0px 0px rgba(240,240,240,1)` | 顶部分隔线 |
| `border & divider/divider ←` | `var(--border-divider-left)` | `inset 1px 0px 0px 0px rgba(240,240,240,1)` | 左侧分隔线 |

```css
:root {
  --shadow-button-primary: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
  --shadow-button-secondary: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
  --shadow-dropdown: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  --shadow-modal: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
                  0px 6px 16px 0px rgba(0, 0, 0, 0.08),
                  0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  --shadow-focus: 0px 0px 0px 2px rgba(24, 144, 255, 0.2);
  --border-divider-bottom: inset 0px -1px 0px 0px rgba(240, 240, 240, 1);
  --border-divider-top: inset 0px 1px 0px 0px rgba(240, 240, 240, 1);
}

/* 阴影使用示例 */
.modal { box-shadow: var(--shadow-modal); }
.dropdown { box-shadow: var(--shadow-dropdown); }
.input:focus { box-shadow: var(--shadow-focus); }
.table-header { box-shadow: var(--border-divider-bottom); }
```

---

## 6. 控件尺寸 Control Size

| 场景 | 高度 | 来源 |
|---|---|---|
| 小按钮/Tag | `24px` | 组件实例 |
| 输入框/按钮/选择器 | `32px` | 高频组件 |
| 导航栏 | `48px` | 顶部导航 |
| 表格表头 | `48px` | Table Header |
| 表格行 | `47px` | Table Cell |
| 侧边栏菜单项 | `32px` | Menu Item |

```css
:root {
  --control-height-sm: 24px;
  --control-height: 32px;
  --control-height-lg: 40px;
  --nav-height: 48px;
  --table-header-height: 48px;
  --table-row-height: 47px;
  --sidebar-menu-height: 32px;
}
```

---

## 7. 布局尺寸 Layout

| 场景 | 值 | CSS 变量 |
|---|---|---|
| 页面宽度 | `1440px` | `var(--layout-page-width)` |
| 侧边栏宽度（展开） | `228px` | `var(--layout-sidebar-width)` |
| 侧边栏宽度（收起） | `48px` ~ `64px` | `var(--layout-sidebar-collapsed)` |
| 顶部导航高度 | `48px` | `var(--layout-nav-height)` |
| 内容区域左偏移 | `228px` ~ `252px` | — |

```css
:root {
  --layout-page-width: 1440px;
  --layout-sidebar-width: 228px;
  --layout-sidebar-collapsed: 48px;
  --layout-nav-height: 48px;
}
```

---

## 8. Token 命名规范速查

```
格式：--[类别]-[名称]-[数值]

颜色类：  --color-primary-1 ~ 7
中性色：  --color-neutral-1 ~ 13
文本色：  --color-text-title, --color-text-primary, --color-text-secondary, --color-text-disabled
语义色：  --color-error-{1,3,5,6}, --color-warning-{1,3,5,6}, --color-success-{1,3,6,7}
扩展色：  --color-purple-{1,3,5,6}, --color-cyan-{1,6,7}
背景色：  --color-bg-page, --color-bg-popover, --color-bg-sider, --color-bg-hover
字体类：  --font-size-{10,12,14,16,18,24,30}
字重类：  --font-weight-{light,regular,medium,semibold}
行高类：  --line-height-{12,14,16,18,24,30}
间距类：  --spacing-{1,2,3,4,5,6,8}
圆角类：  --radius-sm, --radius-md, --radius-full
阴影类：  --shadow-button-primary, --shadow-dropdown, --shadow-modal, --shadow-focus
边框类：  --border-divider-{bottom,top,left}
控件类：  --control-height-sm, --control-height, --control-height-lg
布局类：  --layout-page-width, --layout-sidebar-width, --layout-nav-height
```
