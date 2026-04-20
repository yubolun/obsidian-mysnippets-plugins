import { SuggestModal, Notice } from "obsidian";
import type MySnippetsPlugin from "src/plugin/main";
import { EnhancedApp } from "src/settings/type";

export default class DeleteSnippetModal extends SuggestModal<string> {
  app: EnhancedApp;
  plugin: MySnippetsPlugin;

  constructor(app: EnhancedApp, plugin: MySnippetsPlugin) {
    super(app);
    this.app = app;
    this.plugin = plugin;
    this.setPlaceholder("Select a CSS snippet to delete");
  }

  getSuggestions(query: string): string[] {
    const snippets = this.app.customCss.snippets;
    return snippets.filter((snippet: string) => 
      snippet.toLowerCase().includes(query.toLowerCase())
    );
  }

  renderSuggestion(snippet: string, el: HTMLElement) {
    el.createEl("div", { text: snippet });
  }

  async onChooseSuggestion(snippet: string, evt: MouseEvent | KeyboardEvent) {
    try {
      const snippetPath = `${this.app.customCss.getSnippetsFolder()}/${snippet}.css`;
      
      // Delete the file using vault adapter
      await this.app.vault.adapter.remove(snippetPath);
      
      // Reload snippets
      this.app.customCss.requestLoadSnippets();
      new Notice(`Deleted snippet: ${snippet}.css`);
    } catch (e) {
      console.error(e);
      new Notice(`Failed to delete snippet: ${snippet}`);
    }
  }
}
