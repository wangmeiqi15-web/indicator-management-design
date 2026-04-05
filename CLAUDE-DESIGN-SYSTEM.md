# Design System 设计规范

> 基于 Ant Design Token 体系，适用于设计与开发协作。  
> Token 命名格式：`--[类别]-[名称]-[数值]`

---

## 1. 颜色系统 Color System

采用 **Seed → Map → Alias** 三层色彩架构，支持 Light / Dark 双主题映射。

### 1.1 Brand 品牌色

| Token 名 | CSS 变量 | Light | Dark | 说明 |
|---|---|---|---|---|
| `colorPrimary` | `var(--ant-color-primary)` | `#1677FF` | `#1668DC` | 主品牌色 |
| `colorPrimary1` | `var(--ant-color-primary-1)` | `#E6F4FF` | `#111A2C` | 最浅品牌底色 |
| `colorPrimary2` | `var(--ant-color-primary-2)` | `#BAE0FF` | `#112545` | 浅阶层，卡片高亮背景 |
| `colorPrimary3` | `var(--ant-color-primary-3)` | `#91CAFF` | `#15325B` | hover 边界和弱标签 |
| `colorPrimary4` | `var(--ant-color-primary-4)` | `#69B1FF` | `#15417E` | 中浅层，按压前状态 |
| `colorPrimary5` | `var(--ant-color-primary-5)` | `#4096FF` | `#1554AD` | 高可见度品牌层 |
| `colorPrimary6` | `var(--ant-color-primary-6)` | `#1677FF` | `#1668DC` | 品牌标准值 |
| `colorPrimary7` | `var(--ant-color-primary-7)` | `#0958D9` | `#3C89E8` | active 态与深色标题 |
| `colorPrimary8` | `var(--ant-color-primary-8)` | `#003EB3` | `#65A9F3` | 压暗操作反馈 |
| `colorPrimary9` | `var(--ant-color-primary-9)` | `#002C8C` | `#8DC5F8` | 高对比深色层 |
| `colorPrimary10` | `var(--ant-color-primary-10)` | `#001D66` | `#B7DCFA` | 最深层，数据可视化强调 |

```css
/* 使用示例 */
.btn-primary {
  background: var(--ant-color-primary);
  color: #fff;
}
.card-highlight {
  background: var(--ant-color-primary-1);
  border: 1px solid var(--ant-color-primary-3);
}
```

### 1.2 Neutral 中性色

| Token 名 | CSS 变量 | Light | Dark | 说明 |
|---|---|---|---|---|
| `colorTextBase` | `var(--ant-color-text-base)` | `#000000` | `#FFFFFF` | 文本推导基准色 |
| `colorBgBase` | `var(--ant-color-bg-base)` | `#FFFFFF` | `#000000` | 背景推导基准色 |
| `colorText` | `var(--ant-color-text)` | `#1F1F1F` | `#FFFFFFD9` | 正文主文案 |
| `colorTextSecondary` | `var(--ant-color-text-secondary)` | `#595959` | `#FFFFFFA6` | 辅助说明文案 |
| `colorTextTertiary` | `var(--ant-color-text-tertiary)` | `#8C8C8C` | `#FFFFFF73` | 弱化信息 |
| `colorTextQuaternary` | `var(--ant-color-text-quaternary)` | `#BFBFBF` | `#FFFFFF40` | 禁用/极弱信息 |
| `colorBgElevated` | `var(--ant-color-bg-elevated)` | `#FFFFFF` | `#141414` | 浮层/下拉面 |
| `colorBgContainer` | `var(--ant-color-bg-container)` | `#FFFFFF` | `#141414` | 容器级背景 |
| `colorBgLayout` | `var(--ant-color-bg-layout)` | `#F5F5F5` | `#0F0F0F` | 页面级底色 |
| `colorBgAlter` | `var(--ant-color-bg-alter)` | `#FAFAFA` | `#1A1A1A` | 分组/替代背景 |
| `colorBorder` | `var(--ant-color-border)` | `#D9D9D9` | `#434343` | 标准边框色 |
| `colorBorderSecondary` | `var(--ant-color-border-secondary)` | `#F0F0F0` | `#303030` | 弱边框/分隔色 |

```css
/* 文本层级 */
h1 { color: var(--ant-color-text); }
p  { color: var(--ant-color-text-secondary); }
.caption { color: var(--ant-color-text-tertiary); }
.disabled { color: var(--ant-color-text-quaternary); }
```

### 1.3 Semantic 语义色

| Token 名 | CSS 变量 | Light | Dark | 说明 |
|---|---|---|---|---|
| `colorSuccess` | `var(--ant-color-success)` | `#52C41A` | `#49AA19` | 成功 |
| `colorWarning` | `var(--ant-color-warning)` | `#FAAD14` | `#D89614` | 警告 |
| `colorError` | `var(--ant-color-error)` | `#FF4D4F` | `#DC4446` | 错误 |
| `colorInfo` | `var(--ant-color-info)` | `#1677FF` | `#1668DC` | 信息 |
| `colorSuccessBorder` | `var(--ant-color-success-border)` | `#95DE64` | `#274916` | 成功态边框 |
| `colorWarningBorder` | `var(--ant-color-warning-border)` | `#FFD666` | `#594214` | 警告态边框 |
| `colorErrorBorder` | `var(--ant-color-error-border)` | `#FFAAA5` | `#58181C` | 错误态边框 |
| `colorInfoBorder` | `var(--ant-color-info-border)` | `#91CAFF` | `#15325B` | 信息态边框 |

```css
/* 语义色使用 */
.alert-success {
  color: var(--ant-color-success);
  border: 1px solid var(--ant-color-success-border);
}
.alert-error {
  color: var(--ant-color-error);
  border: 1px solid var(--ant-color-error-border);
}
```

### 1.4 Alias 语义别名

| Token 名 | CSS 变量 | Light | Dark | 说明 |
|---|---|---|---|---|
| `colorFillContent` | `var(--ant-color-fill-content)` | `#0000000F` | `#FFFFFF12` | 弱填充（tag/hover 底） |
| `colorFillContentHover` | `var(--ant-color-fill-content-hover)` | `#00000018` | `#FFFFFF18` | hover 填充层 |
| `colorBgContainerDisabled` | `var(--ant-color-bg-container-disabled)` | `#F5F5F5` | `#1F1F1F` | 禁用控件背景 |
| `colorTextPlaceholder` | `var(--ant-color-text-placeholder)` | `#BFBFBF` | `#8C8C8C` | 输入提示文案 |
| `colorTextDisabled` | `var(--ant-color-text-disabled)` | `#BFBFBF` | `#434343` | 禁用文本 |
| `colorTextHeading` | `var(--ant-color-text-heading)` | `#1F1F1F` | `#FFFFFFE0` | 标题文案 |
| `colorTextLabel` | `var(--ant-color-text-label)` | `#262626` | `#F5F5F5` | 表单标签 |
| `colorSplit` | `var(--ant-color-split)` | `#F0F0F0` | `#303030` | 分隔线 |
| `colorLink` | `var(--ant-color-link)` | `#1677FF` | `#177DDC` | 链接色 |

---

## 2. 字体规范 Typography

### 2.1 字体栈

```css
--ant-font-family: "Noto Sans SC", "PingFang SC", sans-serif;
```

### 2.2 字号体系 Type Scale

| Token 名 | CSS 变量 | 值 | 用途 |
|---|---|---|---|
| `fontSizeSM` | `var(--ant-font-size-sm)` | `12px` | 说明、角标、微文案 |
| `fontSize` | `var(--ant-font-size)` | `14px` | 默认正文 |
| `fontSizeLG` | `var(--ant-font-size-lg)` | `16px` | 大号正文、工具栏标题 |
| `fontSizeXL` | `var(--ant-font-size-xl)` | `20px` | 区域标题、大卡片标题 |

### 2.3 字重

| Token 名 | CSS 变量 | 值 | 用途 |
|---|---|---|---|
| `fontWeightStrong` | `var(--ant-font-weight-strong)` | `600` | 强调文本、按钮文案 |

### 2.4 行高

| Token 名 | CSS 变量 | 值 | 用途 |
|---|---|---|---|
| `lineHeight` | `var(--ant-line-height)` | `1.5715` | 默认正文行高 |
| `lineHeightLG` | `var(--ant-line-height-lg)` | `1.5` | 大标题辅助行高 |

```css
/* 排版示例 */
body {
  font-family: var(--ant-font-family);
  font-size: var(--ant-font-size);       /* 14px */
  line-height: var(--ant-line-height);   /* 1.5715 */
}

h1 {
  font-size: var(--ant-font-size-xl);    /* 20px */
  font-weight: var(--ant-font-weight-strong); /* 600 */
  line-height: var(--ant-line-height-lg); /* 1.5 */
}

.caption {
  font-size: var(--ant-font-size-sm);    /* 12px */
}
```

---

## 3. 间距系统 Spacing

基础单位：**4px**，所有间距值均为 4 的倍数（sizeSM 12px 和 sizeMS 14px 为过渡值例外）。

### 3.1 Space Scale

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `sizeXXS` | `var(--ant-size-xxs)` | `4px` | 最小留白，图标/细微内边距 |
| `sizeXS` | `var(--ant-size-xs)` | `8px` | 紧凑型间距 |
| `sizeSM` | `var(--ant-size-sm)` | `12px` | 小组件间标准间距 |
| `sizeMS` | `var(--ant-size-ms)` | `14px` | 密集信息区 |
| `size` | `var(--ant-size)` | `16px` | 默认栅格基准 |
| `sizeLG` | `var(--ant-size-lg)` | `20px` | 模块内主要分隔距离 |
| `sizeXL` | `var(--ant-size-xl)` | `24px` | 区块级大留白 |
| `size2XL` | `var(--ant-size-2xl)` | `32px` | 页面/大面板内边距 |

### 3.2 Margin & Padding 派生值

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `marginXS` | `var(--ant-margin-xs)` | `8px` | 小组件外边距 |
| `marginSM` | `var(--ant-margin-sm)` | `12px` | 标准模块外间距 |
| `paddingSM` | `var(--ant-padding-sm)` | `12px` | 小型容器内边距 |

```css
/* 间距使用示例 */
.card {
  padding: var(--ant-size-xl);           /* 24px */
  margin-bottom: var(--ant-margin-sm);   /* 12px */
}
.icon-text {
  gap: var(--ant-size-xxs);              /* 4px */
}
.section {
  padding: var(--ant-size-2xl) var(--ant-size-xl); /* 32px 24px */
}
```

---

## 4. 圆角与边框 Border & Radius

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `borderRadius` | `var(--ant-border-radius)` | `6px` | 默认圆角 |
| `lineWidth` | `var(--ant-line-width)` | `1px` | 标准描边粗细 |

```css
/* 圆角使用 */
.card {
  border-radius: var(--ant-border-radius);   /* 6px */
  border: var(--ant-line-width) solid var(--ant-color-border);
}
```

---

## 5. 控件尺寸 Control Size

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `controlHeightSM` | `var(--ant-control-height-sm)` | `24px` | 小尺寸控件 |
| `controlHeight` | `var(--ant-control-height)` | `32px` | 默认控件高度 |
| `controlHeightLG` | `var(--ant-control-height-lg)` | `40px` | 大尺寸控件 |

```css
/* 控件尺寸示例 */
.input-sm { height: var(--ant-control-height-sm); }  /* 24px */
.input    { height: var(--ant-control-height); }      /* 32px */
.input-lg { height: var(--ant-control-height-lg); }   /* 40px */
```

---

## 6. Button 按钮组件

### 6.1 基础属性

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `Button.fontWeight` | `var(--ant-button-font-weight)` | `600` | 按钮文案粗细 |
| `Button.iconGap` | `var(--ant-button-icon-gap)` | `8px` | 图标与文案间距 |

### 6.2 Default 默认按钮

| 状态 | 文本色 | 背景色 | 边框色 |
|---|---|---|---|
| Default | `#1F1F1F` | `#FFFFFF` | `#D9D9D9` |
| Hover | `#4096FF` | `#FFFFFF` | `#4096FF` |
| Active | `#0958D9` | `#FFFFFF` | `#0958D9` |

### 6.3 Primary 主按钮

| 属性 | 值 |
|---|---|
| 文本色 | `#FFFFFF` |
| 背景色 | `var(--ant-color-primary)` → `#1677FF` |

### 6.4 阴影 Shadow

| Token 名 | CSS 变量 | 值 |
|---|---|---|
| `Button.defaultShadow` | `var(--ant-button-default-shadow)` | `0 2px 0 rgba(0,0,0,0.02)` |
| `Button.primaryShadow` | `var(--ant-button-primary-shadow)` | `0 2px 0 rgba(5,145,255,0.10)` |
| `Button.dangerShadow` | `var(--ant-button-danger-shadow)` | `0 2px 0 rgba(255,38,5,0.06)` |

```css
/* 按钮完整示例 */
.btn-default {
  height: var(--ant-control-height);
  font-weight: var(--ant-button-font-weight);
  color: var(--ant-button-default-color);
  background: var(--ant-button-default-bg);
  border: var(--ant-line-width) solid var(--ant-button-default-border-color);
  border-radius: var(--ant-border-radius);
  box-shadow: var(--ant-button-default-shadow);
}
.btn-default:hover {
  color: var(--ant-button-default-hover-color);
  border-color: var(--ant-button-default-hover-border-color);
}
.btn-primary {
  color: var(--ant-button-primary-color);
  background: var(--ant-color-primary);
  box-shadow: var(--ant-button-primary-shadow);
}
```

---

## 7. 动效 Motion

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `motionDurationFast` | `var(--ant-motion-duration-fast)` | `0.10s` | hover / icon 反馈 |
| `motionDurationMid` | `var(--ant-motion-duration-mid)` | `0.20s` | 抽屉 / 按钮过渡 |
| `motionDurationSlow` | `var(--ant-motion-duration-slow)` | `0.30s` | 大面板 / 页面过渡 |
| `motionEaseInOut` | `var(--ant-motion-ease-in-out)` | `cubic-bezier(0.645, 0.045, 0.355, 1)` | 标准进出缓动 |
| `motionEaseOut` | `var(--ant-motion-ease-out)` | `cubic-bezier(0.215, 0.61, 0.355, 1)` | 离场/落位缓动 |

```css
/* 动效示例 */
.transition-default {
  transition: all var(--ant-motion-duration-mid) var(--ant-motion-ease-in-out);
}
.fade-enter {
  transition: opacity var(--ant-motion-duration-fast) var(--ant-motion-ease-out);
}
```

---

## 8. 响应式断点 Responsive Breakpoints

| Token 名 | CSS 变量 | 值 | 说明 |
|---|---|---|---|
| `screenXS` | `var(--ant-screen-xs)` | `480px` | 手机窄屏 |
| `screenSM` | `var(--ant-screen-sm)` | `576px` | 手机横屏 / 小平板 |
| `screenMD` | `var(--ant-screen-md)` | `768px` | 平板 / 小桌面 |
| `screenLG` | `var(--ant-screen-lg)` | `992px` | 标准桌面 |
| `screenXL` | `var(--ant-screen-xl)` | `1200px` | 宽屏 |
| `screenXXL` | `var(--ant-screen-xxl)` | `1600px` | 超宽屏数据台 |

```css
/* 响应式布局示例 */
@media (max-width: 768px)  { /* 平板及以下 */ }
@media (max-width: 576px)  { /* 手机 */ }
@media (min-width: 1200px) { /* 宽屏优化 */ }
```

---

## 9. Token 命名规范速查

```
格式：--[类别]-[名称]-[数值]

颜色类：  --ant-color-primary, --ant-color-primary-1 ~ 10
文本类：  --ant-color-text, --ant-color-text-secondary
背景类：  --ant-color-bg-container, --ant-color-bg-layout
边框类：  --ant-color-border, --ant-color-border-secondary
字体类：  --ant-font-size, --ant-font-size-sm, --ant-font-size-lg
字重类：  --ant-font-weight-strong
行高类：  --ant-line-height, --ant-line-height-lg
间距类：  --ant-size-xxs, --ant-size-xs, --ant-size-sm
控件类：  --ant-control-height, --ant-control-height-sm
圆角类：  --ant-border-radius
动效类：  --ant-motion-duration-fast, --ant-motion-ease-in-out
断点类：  --ant-screen-xs, --ant-screen-md, --ant-screen-xl
组件类：  --ant-button-font-weight, --ant-button-default-color
```
