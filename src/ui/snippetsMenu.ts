import type MySnippetsPlugin from "src/plugin/main";
import { ToggleComponent, ButtonComponent, Notice } from "obsidian";
import { MySnippetsSettings } from "src/settings/settingsData";
import CreateSnippetModal from "src/modal/createSnippetModal";
import DeleteSnippetModal from "src/modal/deleteSnippetModal";
import { EnhancedApp } from "src/settings/type";

function isSnippetEnabled(customCss: any, snippet: string): boolean {
  if (customCss.enabledSnippets instanceof Set || typeof customCss.enabledSnippets.has === 'function') {
    return customCss.enabledSnippets.has(snippet);
  }
  if (Array.isArray(customCss.enabledSnippets)) {
    return customCss.enabledSnippets.includes(snippet);
  }
  return false;
}

export default function snippetsMenu(
  app: EnhancedApp,
  plugin: MySnippetsPlugin,
  settings: MySnippetsSettings
) {
  const existingMenu = document.querySelector(".MySnippets-statusbar-menu");
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  const windowX = window.innerWidth;
  const windowY = window.innerHeight;

  const customCss = app.customCss;
  const currentSnippets = customCss.snippets;
  const snippetsFolder = customCss.getSnippetsFolder();

  const menuEl = document.createElement("div");
  menuEl.addClasses(["menu", "MySnippets-statusbar-menu"]);
  
  if (settings.aestheticStyle) {
    menuEl.setAttribute(
      "style",
      "background-color: var(--background-secondary); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); position: fixed; z-index: var(--layer-menu); padding: 5px; border-radius: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid var(--background-modifier-border); max-height: 70vh; overflow-y: auto;"
    );
  } else {
    menuEl.setAttribute("style", "position: fixed; z-index: var(--layer-menu); padding: 5px; border-radius: 6px; background-color: var(--background-secondary); box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid var(--background-modifier-border); max-height: 70vh; overflow-y: auto;");
  }

  currentSnippets.forEach((snippet: string) => {
    const snippetPath = customCss.getSnippetPath(snippet);
    const itemEl = menuEl.createDiv({ cls: "menu-item" });
    itemEl.style.display = "flex";
    itemEl.style.alignItems = "center";
    itemEl.style.justifyContent = "space-between";
    itemEl.style.gap = "8px";
    itemEl.style.padding = "4px 8px";
    itemEl.style.cursor = "default";
    const titleEl = itemEl.createDiv({ text: snippet, cls: "menu-item-title" });
    titleEl.setAttribute("aria-label", snippet);
    titleEl.setAttribute("aria-label-position", "left");
    titleEl.style.flex = "1";
    titleEl.style.overflow = "hidden";
    titleEl.style.textOverflow = "ellipsis";
    titleEl.style.whiteSpace = "nowrap";
    
    const toggleContainer = itemEl.createDiv();
    const toggleComponent = new ToggleComponent(toggleContainer);
    const isEnabled = isSnippetEnabled(customCss, snippet);
    toggleComponent.setValue(isEnabled).onChange((value) => {
      customCss.setCssEnabledStatus(snippet, value);
    });

    const btnContainer = itemEl.createDiv();
    const buttonComponent = new ButtonComponent(btnContainer);
    buttonComponent
      .setIcon("ms-snippet")
      .setClass("MS-OpenSnippet")
      .setTooltip("Open snippet")
      .onClick((e: any) => {
        e.stopPropagation();
        app.openWithDefaultApp(snippetPath);
      });
      
    itemEl.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  if (currentSnippets.length > 0) {
    const sep = menuEl.createDiv({ cls: "menu-separator" });
    sep.style.margin = "4px 0";
    sep.style.height = "1px";
    sep.style.backgroundColor = "var(--background-modifier-border)";
  }

  const actionsRow = menuEl.createDiv({ cls: "menu-item" });
  actionsRow.style.display = "flex";
  actionsRow.style.justifyContent = "space-around";
  actionsRow.style.gap = "4px";
  actionsRow.style.padding = "4px 8px";
  actionsRow.style.cursor = "default";

  const createBottomButton = (icon: string, tooltip: string, onClick: (e: MouseEvent) => void) => {
    const btnContainer = actionsRow.createDiv();
    const btn = new ButtonComponent(btnContainer)
      .setIcon(icon)
      .setClass("MySnippetsButton")
      .setTooltip(tooltip)
      .onClick(onClick);
    return btn;
  };

  createBottomButton("ms-reload", "Reload snippets", (e) => {
    e.stopPropagation();
    customCss.requestLoadSnippets();
    new Notice("Snippets reloaded");
  });

  createBottomButton("ms-folder", "Open snippets folder", (e) => {
    e.stopPropagation();
    app.openWithDefaultApp(snippetsFolder);
  });

  createBottomButton("ms-add", "Create new snippet", (e) => {
    e.stopPropagation();
    menuEl.remove();
    new CreateSnippetModal(app, plugin).open();
  });

  createBottomButton("lucide-trash", "Delete snippet", (e) => {
    e.stopPropagation();
    menuEl.remove();
    new DeleteSnippetModal(app, plugin).open();
  });

  actionsRow.addEventListener("click", (e) => e.stopPropagation());

  document.body.appendChild(menuEl);

  setTimeout(() => {
    const rect = menuEl.getBoundingClientRect();
    let left = windowX - 15 - rect.width;
    let top = windowY - 37 - rect.height;
    
    if (left < 0) left = 10;
    if (top < 0) top = 10;
    
    menuEl.style.left = `${left}px`;
    menuEl.style.top = `${top}px`;
    
    const outsideClickListener = (e: MouseEvent) => {
      if (!menuEl.contains(e.target as Node)) {
        menuEl.remove();
        document.removeEventListener("click", outsideClickListener);
      }
    };
    document.addEventListener("click", outsideClickListener);
  }, 0);
}
