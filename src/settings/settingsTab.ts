import type MySnippetsPlugin from "src/plugin/main";
import { App, Setting, PluginSettingTab, TextAreaComponent } from "obsidian";
import { setAttributes } from "src/util/setAttributes";

export class MySnippetsSettingTab extends PluginSettingTab {
  plugin: MySnippetsPlugin;
  appendMethod: string;

  constructor(app: App, plugin: MySnippetsPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h1", { text: "MySnippets (修复版)" });

    const authorP = containerEl.createEl("p", { text: "Maintained by " });
    authorP.createEl("a", {
      text: "MachineYu 🧑🏽‍💻",
      href: "https://github.com/yubolun",
    });

    const originalP = containerEl.createEl("p", { text: "Original plugin by " });
    originalP.createEl("a", {
      text: "Chetachi",
      href: "https://github.com/yubolun",
    });

    const h2El = containerEl.createEl("h2", { text: "插件设置" });
    h2El.style.marginTop = "2em";

    new Setting(containerEl)
      .setName("毛玻璃菜单特效")
      .setDesc(
        "开启后，将悬浮菜单的背景更改为具有高级感的毛玻璃（背景模糊）效果。"
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.aestheticStyle)
          .onChange(async (value) => {
            this.plugin.settings.aestheticStyle = value;
            this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("自动打开新代码段")
      .setDesc(
        "选择是否在创建 CSS 代码段文件后立即使用系统默认应用打开它。"
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.openSnippetFile)
          .onChange(async (value) => {
            this.plugin.settings.openSnippetFile = value;
            this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("新代码段默认状态")
      .setDesc(
        "选择新创建的 CSS 代码段文件是否在创建后立刻自动启用。"
      )
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.snippetEnabledStatus)
          .onChange(async (value) => {
            this.plugin.settings.snippetEnabledStatus = value;
            this.plugin.saveSettings();
          });
      });

    const stylingTemplateSetting = new Setting(containerEl);
    stylingTemplateSetting.settingEl.setAttribute(
      "style",
      "display: grid; grid-template-columns: 1fr;"
    );
    stylingTemplateSetting
      .setName("CSS 代码段模板")
      .setDesc(
        "为您即将创建的新 CSS 文件设置默认的 CSS 样式模板代码。"
      );

    const stylingTemplateContent = new TextAreaComponent(
      stylingTemplateSetting.controlEl
    );
    setAttributes(stylingTemplateContent.inputEl, {
      style: "margin-top: 12px; width: 100%;  height: 32vh;",
      class: "ms-css-editor",
    });
    stylingTemplateContent
      .setValue(this.plugin.settings.stylingTemplate)
      .onChange(async (value) => {
        this.plugin.settings.stylingTemplate = value;
        this.plugin.saveSettings();
      });

    const msDonationDiv = containerEl.createEl("div", {
      cls: "msDonationSection",
    });
    msDonationDiv.style.marginTop = "40px";

    const donateText = createEl("p");
    donateText.appendText(
      "如果您觉得这个插件好用，并希望支持后续的开发和维护，欢迎打赏支持！"
    );
    msDonationDiv.appendChild(donateText);

    msDonationDiv.appendChild(
      buyMeACoffeeButton("https://www.buymeacoffee.com/yubolun")
    );

    msDonationDiv.appendChild(
      githubSponsorButton("https://github.com/sponsors/yubolun")
    );

    msDonationDiv.appendChild(wechatPayImage());
  }
}

const buyMeACoffeeButton = (link: string): HTMLElement => {
  const a = createEl("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  a.style.marginRight = "10px";
  a.innerHTML = `<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;" >`;
  return a;
};

const githubSponsorButton = (link: string): HTMLElement => {
  const a = createEl("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  a.innerHTML = `<img src="https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github" alt="GitHub Sponsors" style="height: 40px !important;" >`;
  return a;
};

const wechatPayImage = (): HTMLElement => {
  const div = createEl("div");
  div.style.marginTop = "15px";
  div.style.textAlign = "center";
  div.innerHTML = `<details>
  <summary style="cursor: pointer;"><b>点击展开 / 查看微信支付二维码</b></summary>
  <br>
  <div>
    <img src="https://raw.githubusercontent.com/yubolun/obsidian-mysnippets-plugins/master/assets/wx_pay.jpg" width="200" title="微信支付">
  </div>
</details>`;
  return div;
};
