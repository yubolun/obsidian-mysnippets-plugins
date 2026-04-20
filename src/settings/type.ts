import { App, Menu, MenuItem } from "obsidian";

export type EnhancedMenu = Menu & {
  items: EnhancedMenuItem[];
  setUseNativeMenu: Function;
};

export type EnhancedMenuItem = MenuItem & {
  handleEvent(event: Event): void;
  disabled: boolean;
};

export type EnhancedApp = App & {
  customCss: {
    snippets: string[];
    getSnippetsFolder: Function;
    getSnippetPath: Function;
    enabledSnippets: string[] | Set<string>;
    setCssEnabledStatus: Function;
    requestLoadSnippets: Function;
  };
  openWithDefaultApp: Function;
};
