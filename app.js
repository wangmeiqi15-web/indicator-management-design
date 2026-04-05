/* ================================================
   Design System Viewer — Mi Design System 风格
   三栏布局 + 分类/分组 + 详情面板
   ================================================ */
(function () {
  'use strict';

  // ═══════ TOKEN DATA ═══════
  const TOKEN_DATA = {
    color: {
      label: 'Color Token',
      groups: {
        'Primary 品牌色': [
          { name:'Primary/1', path:'Primary 品牌色/1', light:'#E6F7FF', css:'--color-primary-1', desc:'最浅品牌底色' },
          { name:'Primary/2', path:'Primary 品牌色/2', light:'#BAE7FF', css:'--color-primary-2', desc:'浅阶层背景' },
          { name:'Primary/3', path:'Primary 品牌色/3', light:'#91D5FF', css:'--color-primary-3', desc:'hover 边界' },
          { name:'Primary/4', path:'Primary 品牌色/4', light:'#69C0FF', css:'--color-primary-4', desc:'中浅层' },
          { name:'Primary/5', path:'Primary 品牌色/5', light:'#40A9FF', css:'--color-primary-5', desc:'高可见度' },
          { name:'Primary/6', path:'Primary 品牌色/6', light:'#1890FF', css:'--color-primary-6', desc:'品牌标准主色' },
          { name:'Primary/7', path:'Primary 品牌色/7', light:'#096DD9', css:'--color-primary-7', desc:'active 深色' },
        ],
        'Neutral 中性色': [
          { name:'Neutral/1', path:'Neutral 中性色/1', light:'#FFFFFF', css:'--color-neutral-1', desc:'白色背景' },
          { name:'Neutral/2', path:'Neutral 中性色/2', light:'#FAFAFA', css:'--color-neutral-2', desc:'替代/分组背景' },
          { name:'Neutral/3', path:'Neutral 中性色/3', light:'#F5F5F5', css:'--color-neutral-3', desc:'禁用背景' },
          { name:'Neutral/4', path:'Neutral 中性色/4', light:'#F0F0F0', css:'--color-neutral-4', desc:'分隔线' },
          { name:'Neutral/5', path:'Neutral 中性色/5', light:'#D9D9D9', css:'--color-neutral-5', desc:'标准边框' },
          { name:'Neutral/6', path:'Neutral 中性色/6', light:'#BFBFBF', css:'--color-neutral-6', desc:'禁用文本' },
          { name:'Neutral/7', path:'Neutral 中性色/7', light:'#8C8C8C', css:'--color-neutral-7', desc:'弱化信息' },
          { name:'Neutral/8', path:'Neutral 中性色/8', light:'#595959', css:'--color-neutral-8', desc:'辅助说明' },
          { name:'Neutral/9', path:'Neutral 中性色/9', light:'#434343', css:'--color-neutral-9', desc:'深色辅助' },
          { name:'Neutral/10', path:'Neutral 中性色/10', light:'#262626', css:'--color-neutral-10', desc:'标题文案' },
          { name:'Neutral/11', path:'Neutral 中性色/11', light:'#1F1F1F', css:'--color-neutral-11', desc:'极深文本' },
          { name:'Neutral/12', path:'Neutral 中性色/12', light:'#141414', css:'--color-neutral-12', desc:'接近纯黑' },
          { name:'Neutral/13', path:'Neutral 中性色/13', light:'#000000', css:'--color-neutral-13', desc:'纯黑' },
        ],
        'Character 文本色': [
          { name:'Title .85', path:'Character 文本色/Title', light:'rgba(0,0,0,0.85)', css:'--color-text-title', desc:'标题文案', rgba:true },
          { name:'Primary .85', path:'Character 文本色/Primary', light:'rgba(0,0,0,0.85)', css:'--color-text-primary', desc:'正文主文案', rgba:true },
          { name:'Secondary .45', path:'Character 文本色/Secondary', light:'rgba(0,0,0,0.45)', css:'--color-text-secondary', desc:'辅助说明', rgba:true },
          { name:'Disabled .25', path:'Character 文本色/Disabled', light:'rgba(0,0,0,0.25)', css:'--color-text-disabled', desc:'禁用/placeholder', rgba:true },
          { name:'Inverse', path:'Character 文本色/Inverse', light:'#FFFFFF', css:'--color-text-inverse', desc:'反色文本', inverseBg:'#262626' },
          { name:'Danger', path:'Character 文本色/danger', light:'#FF4D4F', css:'--color-text-danger', desc:'危险文本' },
          { name:'Warning', path:'Character 文本色/warning', light:'#FAAD14', css:'--color-text-warning', desc:'警告文本' },
          { name:'Success', path:'Character 文本色/success', light:'#52C41A', css:'--color-text-success', desc:'成功文本' },
        ],
        'Error 错误色': [
          { name:'Error/1', path:'Error 错误色/1', light:'#FFF1F0', css:'--color-error-1', desc:'错误底色' },
          { name:'Error/3', path:'Error 错误色/3', light:'#FFA39E', css:'--color-error-3', desc:'错误边框' },
          { name:'Error/5', path:'Error 错误色/5', light:'#FF4D4F', css:'--color-error-5', desc:'错误强调' },
          { name:'Error/6', path:'Error 错误色/6', light:'#F5222D', css:'--color-error-6', desc:'错误主色' },
        ],
        'Warning 警告色': [
          { name:'Warning/1', path:'Warning 警告色/1', light:'#FFF7E6', css:'--color-warning-1', desc:'警告底色' },
          { name:'Warning/3', path:'Warning 警告色/3', light:'#FFD591', css:'--color-warning-3', desc:'警告边框' },
          { name:'Warning/5', path:'Warning 警告色/5', light:'#FFA940', css:'--color-warning-5', desc:'警告强调' },
          { name:'Warning/6', path:'Warning 警告色/6', light:'#FA8C16', css:'--color-warning-6', desc:'警告主色' },
        ],
        'Success 成功色': [
          { name:'Success/1', path:'Success 成功色/1', light:'#F6FFED', css:'--color-success-1', desc:'成功底色' },
          { name:'Success/3', path:'Success 成功色/3', light:'#B7EB8F', css:'--color-success-3', desc:'成功边框' },
          { name:'Success/6', path:'Success 成功色/6', light:'#52C41A', css:'--color-success-6', desc:'成功主色' },
          { name:'Success/7', path:'Success 成功色/7', light:'#389E0D', css:'--color-success-7', desc:'成功深色' },
        ],
        'Purple 紫色': [
          { name:'Purple/1', path:'Purple 紫色/1', light:'#F9F0FF', css:'--color-purple-1', desc:'紫色底色' },
          { name:'Purple/3', path:'Purple 紫色/3', light:'#D3ADF7', css:'--color-purple-3', desc:'紫色边框' },
          { name:'Purple/5', path:'Purple 紫色/5', light:'#9254DE', css:'--color-purple-5', desc:'紫色强调' },
          { name:'Purple/6', path:'Purple 紫色/6', light:'#722ED1', css:'--color-purple-6', desc:'紫色主色' },
        ],
        'Cyan 青色': [
          { name:'Cyan/1', path:'Cyan 青色/1', light:'#E6FFFB', css:'--color-cyan-1', desc:'青色底色' },
          { name:'Cyan/6', path:'Cyan 青色/6', light:'#13C2C2', css:'--color-cyan-6', desc:'青色主色' },
          { name:'Cyan/7', path:'Cyan 青色/7', light:'#08979C', css:'--color-cyan-7', desc:'青色深色' },
        ],
        'Conditional 条件色': [
          { name:'page-bg', path:'Conditional/page-background', light:'#F0F2F5', css:'--color-bg-page', desc:'页面底色' },
          { name:'popover', path:'Conditional/pop-over', light:'#FFFFFF', css:'--color-bg-popover', desc:'浮层背景' },
          { name:'sider-bg', path:'Conditional/sider-background', light:'#FFFFFF', css:'--color-bg-sider', desc:'侧边栏背景' },
          { name:'hover', path:'Conditional/item-hover', light:'#F5F5F5', css:'--color-bg-hover', desc:'hover 底色' },
          { name:'divider', path:'Conditional/divider', light:'rgba(0,0,0,0.06)', css:'--color-divider', desc:'分隔线', rgba:true },
          { name:'tooltip', path:'Tooltip/bg', light:'rgba(0,0,0,0.75)', css:'--color-tooltip-bg', desc:'Tooltip 背景', rgba:true },
        ],
      }
    },
    typography: {
      label: 'Typography Token',
      groups: {
        'Type Scale 字号': [
          { name:'caption', css:'--font-size-10', value:'10px', weight:305, lineHeight:'1.6 (16px)', desc:'图表坐标轴、辅助注释', sample:'图表坐标轴辅助注释' },
          { name:'Footnote/desc', css:'--font-size-12', value:'12px', weight:305, lineHeight:'1.667 (20px)', desc:'脚注、描述、角标', sample:'脚注、描述、角标信息' },
          { name:'Footnote/mono', css:'--font-size-12-mono', value:'12px', weight:400, lineHeight:'1.667 (20px)', desc:'等宽数字/代码', sample:'0123456789 ABCDEF', mono:true },
          { name:'Body/regular ★', css:'--font-size-14', value:'14px', weight:330, lineHeight:'1.571 (22px)', desc:'默认正文', sample:'永远相信美好的事情即将发生', highlight:true },
          { name:'Body/medium', css:'--font-size-14-medium', value:'14px', weight:380, lineHeight:'1.571 (22px)', desc:'强调正文/标签', sample:'强调正文与标签' },
          { name:'H5/regular', css:'--font-size-16', value:'16px', weight:330, lineHeight:'1.5 (24px)', desc:'小标题/卡片标题', sample:'小标题与卡片标题' },
          { name:'H5/medium', css:'--font-size-16-medium', value:'16px', weight:380, lineHeight:'1.5 (24px)', desc:'强调小标题', sample:'强调小标题' },
          { name:'heading-md', css:'--font-size-18', value:'18px', weight:450, lineHeight:'1.778 (32px)', desc:'品牌/Logo 文案', sample:'品牌 Logo 文案' },
          { name:'heading-lg', css:'--font-size-24', value:'24px', weight:380, lineHeight:'1.667 (40px)', desc:'大数字展示', sample:'大数字展示' },
          { name:'heading-xl', css:'--font-size-30', value:'30px', weight:380, lineHeight:'1.333 (40px)', desc:'数据卡片大标题', sample:'数据卡片大标题' },
        ],
        'Font Weight 字重': [
          { name:'Light', css:'--font-weight-light', value:'305', desc:'脚注、描述文本', sample:'Aa 永远相信美好' },
          { name:'Regular ★', css:'--font-weight-regular', value:'330', desc:'默认正文', sample:'Aa 永远相信美好', highlight:true },
          { name:'Medium', css:'--font-weight-medium', value:'380', desc:'标签、强调文案', sample:'Aa 永远相信美好' },
          { name:'Semibold', css:'--font-weight-semibold', value:'450', desc:'品牌文案、重要标题', sample:'Aa 永远相信美好' },
        ],
        'Font Family 字体栈': [
          { name:'Base', css:'--font-family-base', value:'"MiSans"', desc:'基础字体', sample:'MiSans 永远相信美好的事情即将发生', fullValue:'"MiSans", -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif' },
          { name:'Mono', css:'--font-family-mono', value:'"Roboto Mono"', desc:'等宽字体', sample:'0123456789 ABCDEF const x = 42;', mono:true, fullValue:'"Roboto Mono", "SF Mono", "Fira Code", Consolas, monospace' },
        ],
      }
    },
    spacing: {
      label: 'Spacing Token',
      groups: {
        'Space Scale': [
          { name:'spacing-1', css:'--spacing-1', value:'4px', numVal:4, desc:'最小单位，图标间微调' },
          { name:'spacing-2', css:'--spacing-2', value:'8px', numVal:8, desc:'紧凑间距，图标+文案' },
          { name:'spacing-3', css:'--spacing-3', value:'12px', numVal:12, desc:'组件内部间距' },
          { name:'spacing-4', css:'--spacing-4', value:'16px', numVal:16, desc:'基准间距，导航项/容器' },
          { name:'spacing-5', css:'--spacing-5', value:'20px', numVal:20, desc:'模块内主要分隔' },
          { name:'spacing-6', css:'--spacing-6', value:'24px', numVal:24, desc:'区块间距、卡片内部' },
          { name:'spacing-8', css:'--spacing-8', value:'32px', numVal:32, desc:'大区块间距' },
        ],
        'Padding 组合': [
          { name:'按钮（标准）', css:'padding', value:'4px 15px', desc:'btn default' },
          { name:'输入框', css:'padding', value:'4px 12px', desc:'input' },
          { name:'表格行', css:'padding', value:'12px', desc:'table row' },
          { name:'卡片内容', css:'padding', value:'20px ~ 24px', desc:'card content' },
          { name:'页面边距', css:'padding', value:'16px', desc:'page gutter' },
          { name:'Tooltip', css:'padding', value:'6px 8px', desc:'tooltip' },
          { name:'Tag', css:'padding', value:'1px 8px', desc:'tag' },
          { name:'菜单项', css:'padding', value:'5px 12px', desc:'menu item' },
        ],
      }
    },
    radius: {
      label: 'Radius Token',
      groups: {
        'Border Radius': [
          { name:'radius-sm', css:'--radius-sm', value:'2px', numVal:2, desc:'默认圆角 · 按钮/输入框/卡片' },
          { name:'radius-md', css:'--radius-md', value:'4px', numVal:4, desc:'较大容器 · 下拉菜单' },
          { name:'radius-full', css:'--radius-full', value:'100px', numVal:100, desc:'胶囊形 · Tag/Badge/Switch' },
        ],
      }
    },
    shadow: {
      label: 'Shadow Token',
      groups: {
        'Drop Shadow': [
          { name:'button-primary', css:'--shadow-button-primary', value:'0 2px 0 0 rgba(0,0,0,0.04)', desc:'主按钮阴影' },
          { name:'button-secondary', css:'--shadow-button-secondary', value:'0 2px 0 0 rgba(0,0,0,0.02)', desc:'次按钮阴影' },
          { name:'dropdown', css:'--shadow-dropdown', value:'0 2px 8px 0 rgba(0,0,0,0.15)', desc:'下拉/Tooltip 阴影' },
          { name:'modal', css:'--shadow-modal', value:'0 9px 28px 8px rgba(0,0,0,0.05), 0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12)', desc:'弹窗/对话框阴影' },
          { name:'focus', css:'--shadow-focus', value:'0 0 0 2px rgba(24,144,255,0.2)', desc:'焦点态光晕' },
        ],
        'Border Divider': [
          { name:'divider ↓', css:'--border-divider-bottom', value:'inset 0 -1px 0 0 rgba(240,240,240,1)', desc:'底部分隔线' },
          { name:'divider ↑', css:'--border-divider-top', value:'inset 0 1px 0 0 rgba(240,240,240,1)', desc:'顶部分隔线' },
          { name:'divider ←', css:'--border-divider-left', value:'inset 1px 0 0 0 rgba(240,240,240,1)', desc:'左侧分隔线' },
        ],
      }
    },
    control: {
      label: 'Control Token',
      groups: {
        '控件尺寸': [
          { name:'control-sm', css:'--control-height-sm', value:'24px', numVal:24, desc:'小按钮 / Tag' },
          { name:'control', css:'--control-height', value:'32px', numVal:32, desc:'输入框 / 按钮 / 选择器' },
          { name:'control-lg', css:'--control-height-lg', value:'40px', numVal:40, desc:'大按钮' },
          { name:'table-row', css:'--table-row-height', value:'47px', numVal:47, desc:'表格行' },
          { name:'nav-height', css:'--layout-nav-height', value:'48px', numVal:48, desc:'导航栏 / 表头' },
        ],
        '布局尺寸': [
          { name:'page-width', css:'--layout-page-width', value:'1440px', numVal:1440, desc:'页面宽度' },
          { name:'sidebar-width', css:'--layout-sidebar-width', value:'228px', numVal:228, desc:'侧边栏宽度（展开）' },
          { name:'sidebar-collapsed', css:'--layout-sidebar-collapsed', value:'48px', numVal:48, desc:'侧边栏宽度（收起）' },
          { name:'nav-height', css:'--layout-nav-height', value:'48px', numVal:48, desc:'顶部导航高度' },
        ],
      }
    },
  };

  // Category mapping for sidebar
  const CATEGORIES = [
    { key:'color', label:'Color Token', icon:'🎨' },
    { key:'typography', label:'Typography Token', icon:'🔤' },
    { key:'spacing', label:'Spacing Token', icon:'📐' },
    { key:'radius', label:'Radius Token', icon:'⬜' },
    { key:'shadow', label:'Shadow Token', icon:'🔲' },
    { key:'control', label:'Control Token', icon:'📏' },
  ];

  // ═══════ STATE ═══════
  let currentCategory = 'color';
  let currentGroup = '全部';
  let currentView = 'list'; // list | grid
  let selectedToken = null;

  // ═══════ DOM REFS ═══════
  const $ = id => document.getElementById(id);
  const mainBody = $('mainBody');
  const mainTitle = $('mainTitle');
  const tokenCount = $('tokenCount');
  const detailPanel = $('detailPanel');
  const detailContent = $('detailContent');
  const categoryList = $('categoryList');
  const groupList = $('groupList');
  const searchInput = $('searchInput');

  // ═══════ HELPERS ═══════
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function showToast(text) {
    const toast = $('toast');
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 1500);
  }

  function copyText(text) {
    navigator.clipboard.writeText(text).then(() => showToast('已复制 ' + text));
  }

  function hexToRgb(hex) {
    if (hex.startsWith('rgba')) return null;
    hex = hex.replace('#','');
    if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    const n = parseInt(hex,16);
    return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
  }

  function rgbToHsl(r,g,b) {
    r/=255;g/=255;b/=255;
    const max=Math.max(r,g,b),min=Math.min(r,g,b);
    let h,s,l=(max+min)/2;
    if(max===min){h=s=0}else{
      const d=max-min;s=l>.5?d/(2-max-min):d/(max+min);
      switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break}
    }
    return{h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)};
  }

  function luminance(r,g,b){
    const a=[r,g,b].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});
    return .2126*a[0]+.7152*a[1]+.0722*a[2];
  }

  function contrastRatio(rgb1,rgb2){
    const l1=luminance(rgb1.r,rgb1.g,rgb1.b)+.05;
    const l2=luminance(rgb2.r,rgb2.g,rgb2.b)+.05;
    return l1>l2?(l1/l2):(l2/l1);
  }

  // Get all tokens for current category, optionally filtered by group
  function getTokens(cat, group, search) {
    const data = TOKEN_DATA[cat];
    if (!data) return [];
    let tokens = [];
    const groups = data.groups;
    for (const [gName, items] of Object.entries(groups)) {
      if (group && group !== '全部' && gName !== group) continue;
      for (const item of items) {
        tokens.push({ ...item, group: gName });
      }
    }
    if (search) {
      const q = search.toLowerCase();
      tokens = tokens.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.css.toLowerCase().includes(q) ||
        (t.path && t.path.toLowerCase().includes(q)) ||
        (t.desc && t.desc.toLowerCase().includes(q)) ||
        (t.light && t.light.toLowerCase().includes(q)) ||
        (t.value && t.value.toLowerCase().includes(q))
      );
    }
    return tokens;
  }

  function getGroupCounts(cat) {
    const data = TOKEN_DATA[cat];
    if (!data) return {};
    const counts = {};
    let total = 0;
    for (const [gName, items] of Object.entries(data.groups)) {
      counts[gName] = items.length;
      total += items.length;
    }
    counts['全部'] = total;
    return counts;
  }

  // ═══════ RENDER SIDEBAR ═══════
  function renderCategories() {
    categoryList.innerHTML = '';
    CATEGORIES.forEach(c => {
      const total = getGroupCounts(c.key)['全部'] || 0;
      const li = el('li', c.key === currentCategory ? 'active' : '');
      li.innerHTML = `<span>${c.label}</span><span class="cat-count">${total}</span>`;
      li.addEventListener('click', () => {
        currentCategory = c.key;
        currentGroup = '全部';
        selectedToken = null;
        render();
      });
      categoryList.appendChild(li);
    });
  }

  function renderGroups() {
    groupList.innerHTML = '';
    const counts = getGroupCounts(currentCategory);
    // 全部
    const allLi = el('li', currentGroup === '全部' ? 'active' : '');
    allLi.innerHTML = `<span>全部</span><span class="grp-count">${counts['全部']||0}</span>`;
    allLi.addEventListener('click', () => { currentGroup = '全部'; selectedToken = null; render(); });
    groupList.appendChild(allLi);
    // groups
    for (const gName of Object.keys(TOKEN_DATA[currentCategory].groups)) {
      const li = el('li', currentGroup === gName ? 'active' : '');
      li.innerHTML = `<span>${gName}</span><span class="grp-count">${counts[gName]||0}</span>`;
      li.addEventListener('click', () => { currentGroup = gName; selectedToken = null; render(); });
      groupList.appendChild(li);
    }
  }

  // ═══════ RENDER MAIN ═══════
  function renderMain() {
    const cat = currentCategory;
    const data = TOKEN_DATA[cat];
    mainTitle.textContent = data.label;
    const tokens = getTokens(cat, currentGroup, searchInput.value);
    tokenCount.textContent = tokens.length + ' tokens';
    mainBody.innerHTML = '';

    if (currentView === 'grid') {
      renderGrid(cat, tokens);
    } else {
      renderList(cat, tokens);
    }
  }

  // ─── List View ───
  function renderList(cat, tokens) {
    // Group tokens
    const grouped = {};
    tokens.forEach(t => {
      if (!grouped[t.group]) grouped[t.group] = [];
      grouped[t.group].push(t);
    });

    for (const [gName, items] of Object.entries(grouped)) {
      // Group header
      const gh = el('div', 'token-group-header', gName);
      mainBody.appendChild(gh);
      // Table head
      const thead = el('div', 'token-table-head ' + getHeadClass(cat));
      thead.innerHTML = getHeadColumns(cat);
      mainBody.appendChild(thead);
      // Rows
      items.forEach(token => {
        const row = el('div', 'token-row ' + getRowClass(cat));
        if (selectedToken && selectedToken.css === token.css && selectedToken.name === token.name) row.classList.add('selected');
        row.innerHTML = getRowHTML(cat, token);
        row.addEventListener('click', () => selectToken(cat, token, row));
        mainBody.appendChild(row);
      });
    }
  }

  function getHeadClass(cat) {
    return { color:'color-head', typography:'typo-head', spacing:'space-head',
             radius:'radius-head', shadow:'shadow-head', control:'control-head' }[cat] || '';
  }
  function getRowClass(cat) {
    return { color:'color-row', typography:'typo-row', spacing:'space-row',
             radius:'radius-row', shadow:'shadow-row', control:'control-row' }[cat] || '';
  }

  function getHeadColumns(cat) {
    switch(cat) {
      case 'color': return '<span></span><span>NAME</span><span>PATH</span><span>LIGHT</span><span>DARK</span><span>ALIAS</span>';
      case 'typography': return '<span>NAME</span><span>PREVIEW</span><span>SIZE</span><span>WEIGHT</span><span>LINE-H</span><span>DESC</span>';
      case 'spacing': return '<span>NAME</span><span>VALUE</span><span>DESC</span><span>VISUAL</span>';
      case 'radius': return '<span>NAME</span><span>VALUE</span><span>PREVIEW</span><span>DESC</span><span>VISUAL</span>';
      case 'shadow': return '<span>NAME</span><span>VALUE</span><span>PREVIEW</span>';
      case 'control': return '<span>NAME</span><span>VALUE</span><span>DESC</span><span>VISUAL</span>';
    }
  }

  function getRowHTML(cat, t) {
    switch(cat) {
      case 'color': {
        const bg = t.rgba ? 'background:repeating-conic-gradient(#eee 0% 25%,#fff 0% 50%) 0 0/12px 12px' : '';
        const swatchStyle = t.inverseBg
          ? `background:${t.inverseBg};color:${t.light};`
          : `background:${t.light};${bg?bg+';':''}`;
        const swatchCls = (t.rgba || t.inverseBg) ? 'row-swatch row-swatch--text' : 'row-swatch';
        const swatchInner = (t.rgba || t.inverseBg) ? 'Aa' : '';
        return `<div class="${swatchCls}" style="${swatchStyle}">${swatchInner}</div>
          <span class="row-name">${t.name}</span>
          <span class="row-path">${t.path||''}</span>
          <span class="row-hex">${t.light}</span>
          <span class="row-hex">${t.dark||''}</span>
          <span class="row-alias">${t.alias||''}</span>`;
      }
      case 'typography': {
        const fs = t.value ? parseInt(t.value) : 14;
        const fw = t.weight || parseInt(t.value) || 400;
        const ff = t.mono ? 'font-family:var(--ds-mono);' : '';
        const hl = t.highlight ? 'font-weight:600;' : '';
        return `<span class="row-name" style="${hl}">${t.name}</span>
          <span class="row-typo-preview" style="font-size:${fs}px;font-weight:${fw};${ff}">${t.sample||''}</span>
          <span class="row-val">${t.value||''}</span>
          <span class="row-val">${t.weight||''}</span>
          <span class="row-val">${t.lineHeight||''}</span>
          <span class="row-alias">${t.desc||''}</span>`;
      }
      case 'spacing': {
        const barW = t.numVal ? Math.min(t.numVal / 32 * 100, 100) : 0;
        return `<span class="row-name">${t.name}</span>
          <span class="row-val">${t.value}</span>
          <span class="row-alias">${t.desc||''}</span>
          <span><div class="row-spacing-bar" style="width:${barW}%"></div></span>`;
      }
      case 'radius': {
        const rv = t.numVal != null ? Math.min(t.numVal, 50) : 4;
        const w = t.numVal > 50 ? '48px' : '32px';
        const h = t.numVal > 50 ? '24px' : '32px';
        return `<span class="row-name">${t.name}</span>
          <span class="row-val">${t.value}</span>
          <span><div class="row-radius-preview" style="border-radius:${rv}px;width:${w};height:${h}"></div></span>
          <span class="row-alias">${t.desc||''}</span>
          <span class="row-val">${t.css}</span>`;
      }
      case 'shadow':
        return `<span class="row-name">${t.name}</span>
          <span class="row-val" style="font-size:11px">${t.value}</span>
          <span><div class="row-shadow-preview" style="box-shadow:${t.value}"></div></span>`;
      case 'control': {
        const bw = t.numVal ? Math.min(t.numVal / 48 * 100, 100) : 50;
        return `<span class="row-name">${t.name}</span>
          <span class="row-val">${t.value}</span>
          <span class="row-alias">${t.desc||''}</span>
          <span><div class="row-control-bar" style="width:${bw}%">${t.value}</div></span>`;
      }
    }
  }

  // ─── Grid View ───
  function renderGrid(cat, tokens) {
    if (cat === 'color') {
      const container = el('div', 'grid-container');
      tokens.forEach(t => {
        const swatch = el('div', 'grid-swatch' + (selectedToken && selectedToken.css === t.css && selectedToken.name === t.name ? ' selected' : ''));
        const bg = t.rgba ? 'background:repeating-conic-gradient(#eee 0% 25%,#fff 0% 50%) 0 0/12px 12px' : '';
        const bgStyle = t.inverseBg ? `background:${t.inverseBg}` : `background:${t.light};${bg}`;
        swatch.innerHTML = `<div class="grid-swatch-block" style="${bgStyle}"></div>
          <div class="grid-swatch-name">${t.name}</div>
          <div class="grid-swatch-hex">${t.light}</div>`;
        swatch.addEventListener('click', () => selectToken(cat, t, swatch));
        container.appendChild(swatch);
      });
      mainBody.appendChild(container);
    } else {
      const container = el('div', 'grid-container');
      container.style.gridTemplateColumns = 'repeat(auto-fill,minmax(180px,1fr))';
      tokens.forEach(t => {
        const card = el('div', 'grid-card' + (selectedToken && selectedToken.css === t.css && selectedToken.name === t.name ? ' selected' : ''));
        card.innerHTML = `<div class="grid-card-title">${t.name}</div>
          <div class="grid-card-value">${t.value||''}</div>
          <div class="grid-card-desc">${t.desc||''}</div>`;
        card.addEventListener('click', () => selectToken(cat, t, card));
        container.appendChild(card);
      });
      mainBody.appendChild(container);
    }
  }

  // ═══════ SELECT TOKEN → DETAIL ═══════
  function selectToken(cat, token, rowEl) {
    selectedToken = token;
    // Highlight row
    mainBody.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    if (rowEl) rowEl.classList.add('selected');
    // Open panel
    detailPanel.classList.add('open');
    // Show backdrop on mobile
    const bd = document.getElementById('detailBackdrop');
    if (bd && window.innerWidth <= 768) bd.classList.add('show');
    renderDetail(cat, token);
  }

  function renderDetail(cat, t) {
    let html = '';
    switch(cat) {
      case 'color': html = renderColorDetail(t); break;
      case 'typography': html = renderTypoDetail(t); break;
      case 'spacing': html = renderSpacingDetail(t); break;
      case 'radius': html = renderRadiusDetail(t); break;
      case 'shadow': html = renderShadowDetail(t); break;
      case 'control': html = renderControlDetail(t); break;
    }
    detailContent.innerHTML = html;
    // Bind copy events
    detailContent.querySelectorAll('[data-copy]').forEach(el => {
      el.addEventListener('click', () => copyText(el.dataset.copy));
    });
  }

  function renderColorDetail(t) {
    const light = t.light;
    const rgb = hexToRgb(light);
    let hsl = null;
    let previewStyle = '';
    if (t.inverseBg) {
      previewStyle = `background:${t.inverseBg}`;
    } else if (t.rgba) {
      previewStyle = `background:repeating-conic-gradient(#eee 0% 25%,#fff 0% 50%) 0 0/16px 16px;position:relative`;
    } else {
      previewStyle = `background:${light}`;
    }

    let html = `<div class="detail-name">${t.name}</div>`;
    html += `<div class="detail-preview" style="${previewStyle}">`;
    if (t.rgba) {
      html += `<div style="position:absolute;inset:0;background:${light};border-radius:8px"></div>`;
    }
    html += `</div>`;

    // 当前值
    html += `<div class="detail-section"><div class="detail-section-title">当前值</div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">HEX</span><span class="detail-kv-value" data-copy="${light}">${light}</span></div>`;
    if (rgb) {
      hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      html += `<div class="detail-kv"><span class="detail-kv-label">RGB</span><span class="detail-kv-value" data-copy="rgb(${rgb.r}, ${rgb.g}, ${rgb.b})">${rgb.r}, ${rgb.g}, ${rgb.b}</span></div>`;
      html += `<div class="detail-kv"><span class="detail-kv-label">HSL</span><span class="detail-kv-value" data-copy="hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)">${hsl.h}°, ${hsl.s}%, ${hsl.l}%</span></div>`;
    }
    html += `</div>`;

    // 对比度
    if (rgb) {
      const white = {r:255,g:255,b:255};
      const black = {r:0,g:0,b:0};
      const crW = contrastRatio(rgb, white).toFixed(2);
      const crB = contrastRatio(rgb, black).toFixed(2);
      html += `<div class="detail-section"><div class="detail-section-title">对比度 CONTRAST</div>`;
      html += `<div class="contrast-row">
        <div class="contrast-swatch" style="background:#fff"></div>
        <span class="contrast-ratio">${crW}:1</span>
        <span class="contrast-badge ${crW>=4.5?'pass':'fail'}">AA ${crW>=4.5?'✓':'✗'}</span>
        <span class="contrast-badge ${crW>=7?'pass':'fail'}">AAA ${crW>=7?'✓':'✗'}</span>
      </div>`;
      html += `<div class="contrast-row">
        <div class="contrast-swatch" style="background:#000"></div>
        <span class="contrast-ratio">${crB}:1</span>
        <span class="contrast-badge ${crB>=4.5?'pass':'fail'}">AA ${crB>=4.5?'✓':'✗'}</span>
        <span class="contrast-badge ${crB>=7?'pass':'fail'}">AAA ${crB>=7?'✓':'✗'}</span>
      </div></div>`;
    }

    // 代码
    html += `<div class="detail-section"><div class="detail-section-title">代码 CODE</div>`;
    html += `<div class="detail-code"><span class="code-comment">/* CSS */</span>\n<span class="code-var">var(${t.css})</span>\n\n<span class="code-comment">/* Value */</span>\n${light}</div>`;
    html += `</div>`;

    return html;
  }

  function renderTypoDetail(t) {
    const fs = t.value ? parseInt(t.value) : 14;
    const fw = t.weight || parseInt(t.value) || 400;
    const ff = t.mono ? "font-family:'Roboto Mono',monospace;" : '';
    let html = `<div class="detail-name">${t.name}</div>`;
    html += `<div class="detail-typo-preview" style="font-size:${Math.min(fs,30)}px;font-weight:${fw};${ff}line-height:1.5">${t.sample||t.name}</div>`;
    html += `<div class="detail-section"><div class="detail-section-title">属性</div>`;
    if (t.value) html += `<div class="detail-kv"><span class="detail-kv-label">值</span><span class="detail-kv-value" data-copy="${t.fullValue||t.value}">${t.value}</span></div>`;
    if (t.weight) html += `<div class="detail-kv"><span class="detail-kv-label">字重</span><span class="detail-kv-value" data-copy="${t.weight}">${t.weight}</span></div>`;
    if (t.lineHeight) html += `<div class="detail-kv"><span class="detail-kv-label">行高</span><span class="detail-kv-value" data-copy="${t.lineHeight}">${t.lineHeight}</span></div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">用途</span><span class="detail-kv-value">${t.desc||''}</span></div>`;
    html += `</div>`;
    html += `<div class="detail-section"><div class="detail-section-title">代码 CODE</div>`;
    html += `<div class="detail-code"><span class="code-comment">/* CSS */</span>\n<span class="code-var">var(${t.css})</span>\n\n<span class="code-comment">/* Value */</span>\n${t.fullValue||t.value}</div>`;
    html += `</div>`;
    return html;
  }

  function renderSpacingDetail(t) {
    let html = `<div class="detail-name">${t.name}</div>`;
    if (t.numVal) {
      html += `<div class="detail-spacing-visual">`;
      const h = Math.min(t.numVal * 2.5, 80);
      html += `<div class="detail-spacing-block" style="width:100%;height:${h}px"></div>`;
      html += `</div>`;
    }
    html += `<div class="detail-section"><div class="detail-section-title">属性</div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">值</span><span class="detail-kv-value" data-copy="${t.value}">${t.value}</span></div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">用途</span><span class="detail-kv-value">${t.desc||''}</span></div>`;
    html += `</div>`;
    html += `<div class="detail-section"><div class="detail-section-title">代码 CODE</div>`;
    html += `<div class="detail-code"><span class="code-comment">/* CSS */</span>\n<span class="code-var">var(${t.css})</span>\n\n<span class="code-comment">/* Value */</span>\n${t.value}</div>`;
    html += `</div>`;
    return html;
  }

  function renderRadiusDetail(t) {
    const rv = t.numVal != null ? Math.min(t.numVal, 50) : 4;
    const w = t.numVal > 50 ? '120px' : '80px';
    const h = t.numVal > 50 ? '48px' : '80px';
    let html = `<div class="detail-name">${t.name}</div>`;
    html += `<div class="detail-radius-visual" style="border-radius:${rv}px;width:${w};height:${h}"></div>`;
    html += `<div class="detail-section"><div class="detail-section-title">属性</div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">值</span><span class="detail-kv-value" data-copy="${t.value}">${t.value}</span></div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">用途</span><span class="detail-kv-value">${t.desc||''}</span></div>`;
    html += `</div>`;
    html += `<div class="detail-section"><div class="detail-section-title">代码 CODE</div>`;
    html += `<div class="detail-code"><span class="code-comment">/* CSS */</span>\n<span class="code-var">var(${t.css})</span>\n\n<span class="code-comment">/* Value */</span>\n${t.value}</div>`;
    html += `</div>`;
    return html;
  }

  function renderShadowDetail(t) {
    let html = `<div class="detail-name">${t.name}</div>`;
    html += `<div class="detail-shadow-visual" style="box-shadow:${t.value}"></div>`;
    html += `<div class="detail-section"><div class="detail-section-title">属性</div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">值</span><span class="detail-kv-value" data-copy="${t.value}" style="font-size:11px;word-break:break-all">${t.value}</span></div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">用途</span><span class="detail-kv-value">${t.desc||''}</span></div>`;
    html += `</div>`;
    html += `<div class="detail-section"><div class="detail-section-title">代码 CODE</div>`;
    html += `<div class="detail-code"><span class="code-comment">/* CSS */</span>\n<span class="code-var">var(${t.css})</span>\n\n<span class="code-comment">/* Value */</span>\n${t.value}</div>`;
    html += `</div>`;
    return html;
  }

  function renderControlDetail(t) {
    let html = `<div class="detail-name">${t.name}</div>`;
    if (t.numVal) {
      const h = Math.min(t.numVal, 60);
      html += `<div class="detail-control-visual" style="height:${h}px">${t.value}</div>`;
    }
    html += `<div class="detail-section"><div class="detail-section-title">属性</div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">值</span><span class="detail-kv-value" data-copy="${t.value}">${t.value}</span></div>`;
    html += `<div class="detail-kv"><span class="detail-kv-label">用途</span><span class="detail-kv-value">${t.desc||''}</span></div>`;
    html += `</div>`;
    html += `<div class="detail-section"><div class="detail-section-title">代码 CODE</div>`;
    html += `<div class="detail-code"><span class="code-comment">/* CSS */</span>\n<span class="code-var">var(${t.css})</span>\n\n<span class="code-comment">/* Value */</span>\n${t.value}</div>`;
    html += `</div>`;
    return html;
  }

  // ═══════ EXPORT ═══════
  function exportTokens() {
    const tokens = getTokens(currentCategory, currentGroup, searchInput.value);
    const data = tokens.map(t => ({
      name: t.name,
      css: t.css,
      value: t.light || t.value || '',
      group: t.group,
      desc: t.desc || '',
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentCategory}-tokens.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('已导出 ' + tokens.length + ' 个 Token');
  }

  // ═══════ RENDER ALL ═══════
  function render() {
    renderCategories();
    renderGroups();
    renderMain();
    if (!selectedToken) {
      detailPanel.classList.remove('open');
      detailContent.innerHTML = `<div class="detail-placeholder">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="8" stroke="#D9D9D9" stroke-width="2" stroke-dasharray="4 4"/><path d="M18 24h12M24 18v12" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round"/></svg>
        <p>点击任意 Token 查看详情</p>
      </div>`;
    }
  }

  // ═══════ EVENTS ═══════
  $('viewGrid').addEventListener('click', () => {
    currentView = 'grid';
    $('viewGrid').classList.add('active');
    $('viewList').classList.remove('active');
    renderMain();
  });
  $('viewList').addEventListener('click', () => {
    currentView = 'list';
    $('viewList').classList.add('active');
    $('viewGrid').classList.remove('active');
    renderMain();
  });
  $('detailClose').addEventListener('click', () => {
    detailPanel.classList.remove('open');
    const backdrop = $('detailBackdrop');
    if (backdrop) backdrop.classList.remove('show');
    selectedToken = null;
    mainBody.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
  });

  // Detail backdrop click closes panel
  const backdrop = $('detailBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      detailPanel.classList.remove('open');
      backdrop.classList.remove('show');
      selectedToken = null;
      mainBody.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    });
  }

  $('exportBtn').addEventListener('click', exportTokens);

  // ═══════ MOBILE: Sidebar Toggle ═══════
  const sidebarToggle = $('sidebarToggle');
  const sidebar = $('sidebar');
  function checkMobile() {
    const mobile = window.innerWidth <= 768;
    if (sidebarToggle) sidebarToggle.style.display = mobile ? 'flex' : 'none';
    if (!mobile) sidebar.classList.remove('collapsed');
  }
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      sidebarToggle.textContent = sidebar.classList.contains('collapsed') ? '☰' : '✕';
    });
  }
  window.addEventListener('resize', checkMobile);
  checkMobile();

  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(renderMain, 200);
  });

  // Init
  render();
})();
