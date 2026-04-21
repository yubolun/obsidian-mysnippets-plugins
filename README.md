[English](./README_en.md) | [简体中文](./README.md)

# MySnippets (修复版) 插件

![obsidian-mysnippets-plugin Downloads](https://img.shields.io/github/downloads/yubolun/obsidian-mysnippets-plugins/total.svg)
![obsidian-mysnippets-plugin Releases](https://img.shields.io/github/v/release/yubolun/obsidian-mysnippets-plugins)

**版本**: 2.0.1  
**作者**: MachineYu (原作者 Chetachi)

MySnippets 是一款能在 Obsidian 状态栏添加快捷菜单的插件，让你在工作区内就能极其方便地管理所有的 CSS 代码段 (Snippets) 🖌。这个“修复版”不仅让插件完美兼容了最新版本的 Obsidian，还加入了一些实用新特性！

## 核心功能

- **快捷开关菜单**: 从状态栏一键呼出一个设计精美、带有背景模糊效果（毛玻璃）的悬浮菜单。
- **一键启用/禁用**: 快速切换任意 CSS 代码段的状态，无需再进入繁杂的系统设置。
- **快速编辑**: 点击任意代码段右侧的 `</>` 按钮，即可使用系统默认编辑器打开该 CSS 文件。
- **底部快捷操作栏**:
  - 🔄 **重载代码段**: 一键重新加载所有 CSS 更改。
  - 📁 **打开文件夹**: 直接在资源管理器中打开隐藏的 `.obsidian/snippets` 目录。
  - ➕ **新建代码段**: 直接在 Obsidian 弹窗内手写 CSS 并保存为新文件。
  - 🗑️ **删除代码段**: *[全新功能]* 通过一个优雅的搜索弹窗快速选择并永久删除不需要的代码段，告别手动翻找隐藏文件夹。

## 效果演示

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144683686-b8cfd625-e864-489d-8d0b-2fc36b7bd260.gif" alt="open-menu-in-statusbar" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

## 易用性 (Ease of Use)

我们都喜欢在 Obsidian 里折腾各种 CSS 代码段，但我敢打赌，大多数人都不喜欢频繁打开设置面板只为了开关这些代码段。有了 MySnippets，你终于可以轻松访问并在工作区内随意开关你的代码段了！你可以把它看作是设置面板中“CSS 代码段”页面的浓缩版和便捷版。我不知道你是怎么想的，但当我想编辑我的代码段时，我真的不想去繁杂的设置面板里翻找！这很分散注意力、浪费时间，而且很烦人！所以，让我们结束 `设置 > 外观 > CSS 代码段` 的旧时代，迎接 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><path d="M5.764 8l-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054l7.418-2.997l-4.87-12.053l-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855a1 1 0 0 1 .75 1.855z" fill="currentColor"/></svg> ← _点这里_ 的新时代吧！

<img src="https://raw.githubusercontent.com/yubolun/obsidian-mysnippets-plugins/master/assets/configureSnippets.png" width="280px">

## 工作原理 (How it Works)

MySnippets 会在你的工作区状态栏上添加一个可爱的小图标。你只需要点击它，就能在一个精致的菜单中看到你所有的代码段！在这里，你会看到菜单底部有对应的操作按钮。触发“重载”按钮将允许插件重新读取你的代码段文件夹，以防你新建或删除了某个代码段。触发“文件夹”按钮将直接打开存放你代码段的系统目录。这些按钮完美模拟了原生设置页面中的功能。

<img src="https://user-images.githubusercontent.com/79069364/144683689-e125c321-8757-4afd-956a-4227b55363bf.gif" alt="open-snippet-folder" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

每个代码段项都有一个滑动开关和一个编辑按钮。你可以使用开关来开启/关闭你的代码段。

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

你还可以使用最右侧的按钮，以你系统中默认打开 CSS 文件的应用程序来直接打开并编辑该代码段。

<img src="https://user-images.githubusercontent.com/79069364/144683696-b8c29740-94e4-48b0-b865-b2f9f6fffd61.gif" alt="open-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

在 Mac 上，你可以通过右键点击任何 CSS 文件，然后选择“显示简介 (Get info)”，接着进入“打开方式 (Open with)”部分，选择你想使用的应用程序。使用“全部更改... (Change All...)”按钮，将此应用程序设为打开 CSS 文件的系统全局默认应用。

<img src="https://raw.githubusercontent.com/yubolun/obsidian-mysnippets-plugins/master/assets/defaultApp.png" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

使用 MySnippets，你还可以更改菜单的设计美学。你可以在设置面板中为 MySnippets 开启“毛玻璃 (glass)”风格，赋予它独特而充满未来感的高级外观！

<img src="https://user-images.githubusercontent.com/79069364/144682628-d38979c2-c0d1-4709-8ecb-d9ab72c2cb77.png" alt="glass-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144682602-d31beed0-ed0e-4194-a71f-faa6a05dc945.png" alt="default-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

### 创建新的 CSS 代码段

现在你可以直接使用内部弹窗创建新 CSS 代码段的功能。你只需提供文件名和文件内容即可。你还可以在设置面板中为新代码段设置默认模板。新增的设置选项允许你决定创建后是否要自动打开该代码段文件，以及创建后是否自动开启该代码段。

<img alt="create-css-snippet" src="https://user-images.githubusercontent.com/79069364/144666473-1d1b40d1-9336-48b8-9de6-d2ddca651f1b.gif" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

## 安装方法

这是原版 MySnippets 的现代化修复版本。

### 手动安装
1. 前往 [Releases](https://github.com/yubolun/obsidian-mysnippets-plugins/releases) 页面。
2. 下载最新版本中的 `main.js`、`manifest.json` 和 `styles.css`。
3. 在你的 Obsidian 库中，打开隐藏目录 `.obsidian/plugins/`，并新建一个名为 `obsidian-mysnippets-plugins` 的文件夹。
4. 将下载的三个文件放入该文件夹中。
5. 重启 Obsidian，并在“第三方插件”设置中启用它。

## 更新日志

### 2.0.1
- **UI 优化**: 全新设计的“毛玻璃菜单特效”（玻璃态效果）。现在，当在设置中开启该效果时，悬浮菜单将呈现带有明显渐变和彩色边框的高级半透明设计，极大改善了之前在纯白背景下模糊效果不明显的问题。

### 2.0.0 (修复与升级)
- **UI 架构重构**: 为了兼容新版 Obsidian，摒弃了原生的受限菜单 API，纯代码手工打造了一个与原生菜单体验完全一致的自定义悬浮气泡框。
- **修复崩溃问题**: 彻底解决了在较新版本 Obsidian 中点击菜单无响应或报错的问题。
- **新增删除功能**: 底部栏加入了“垃圾桶”按钮，支持原生搜索式删除代码段。
- **细节优化**: 修复了按钮颜色错乱问题，完美适配 Obsidian 默认主题的强调色（蓝色）；当代码段名称过长时，悬停会自动展示完整名称的原生提示框，悬浮层级逻辑完美契合原生 UI。

## 鸣谢 & 支持
原插件由 [Chetachi](https://github.com/chetachiezikeuzor) 用 ❤️ 制作。  
此 `Fix` 修复版由 MachineYu 维护更新，旨在让这款优秀的插件能在现代版本的 Obsidian 中继续发光发热！

## 赞赏支持

如果你觉得这个修复版插件对你有帮助，欢迎赞赏支持我，请我喝杯咖啡！

<a href="https://www.buymeacoffee.com/yubolun" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

<details>
  <summary><b>点击展开 / 查看微信支付二维码</b></summary>
  <br>
  <div align="left">
    <img src="https://raw.githubusercontent.com/yubolun/obsidian-mysnippets-plugins/master/assets/wx_pay.jpg" width="250" title="微信支付">
  </div>
  <p>如果您觉得这个插件好用，欢迎打赏支持！</p>
</details>