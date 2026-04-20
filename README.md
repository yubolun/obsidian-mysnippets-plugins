[English](./README.md) | [简体中文](./README_zh.md)

# MySnippets (Fix) Plugin

![obsidian-mysnippets-plugin Downloads](https://img.shields.io/github/downloads/yubolun/obsidian-mysnippets-plugins/total.svg)
![obsidian-mysnippets-plugin Releases](https://img.shields.io/github/v/release/yubolun/obsidian-mysnippets-plugins)

**Version**: 2.0.0  
**Author**: MachineYu (Original plugin by Chetachi)

MySnippets is an Obsidian plugin that adds a status bar menu allowing the user to quickly manage their CSS snippets within the comfort of their workspace 🖌. This updated "Fix" version makes the plugin fully compatible with the latest versions of Obsidian and adds several new features!

## Features

- **Quick Toggle Menu**: A beautifully designed, glass-morphic popover menu triggered right from your status bar.
- **Enable/Disable Snippets**: Toggle your snippets on and off with a single click.
- **Quick Edit**: Click the `</>` button next to any snippet to instantly open the CSS file in your default editor.
- **Action Bar**:
  - 🔄 **Reload Snippets**: Instantly reload your snippets without opening the Obsidian settings.
  - 📁 **Open Folder**: Open your hidden `.obsidian/snippets` directory.
  - ➕ **Create Snippet**: Write new CSS and save it directly from a modal within Obsidian.
  - 🗑️ **Delete Snippet**: *[NEW]* Easily delete snippets straight from a search modal—no more navigating to hidden folders manually.

## Demo

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144683686-b8cfd625-e864-489d-8d0b-2fc36b7bd260.gif" alt="open-menu-in-statusbar" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

## Ease of Use

We all love hacking away at Obsidian with a bunch of different snippets, but I'm willing to bet that most of us don't like having to trigger and re-trigger the settings tab just to get to our snippets. With MySnippets, we can finally access our snippets and toggle them on and off easily! Think of it as a condensed and tucked away version of the "CSS Snippets" section in the settings tab. I don't know about you, but when I want to edit my snippets, I don't want to have to rummage through the settings tab just to get to them! It can be distracting, a time waster, and just overall annoying! So let's end the era of `Settings > Appearance > CSS Snippets` and welcome the new era of <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><path d="M5.764 8l-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054l7.418-2.997l-4.87-12.053l-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855a1 1 0 0 1 .75 1.855z" fill="currentColor"/></svg> ← _Click_!

<img src="https://raw.githubusercontent.com/yubolun/obsidian-mysnippets-plugins/master/assets/configureSnippets.png" width="280px">

## How it Works

MySnippets appends a cute little status bar icon in your workspace. All you need to do is click and see all of your lovely snippets in a menu! Here, you will see two buttons to the bottom of the menu. The first is your "Reload" button and the second is your "Folder" button. Triggering "Reload" button will allow the plugin to reread your snippets folder, in case you have decided to create a new snippet or delete a snippet. Triggering the "Folder" button will open the folder that houses your snippets. These buttons mimic the functions in the settings tab.

<img src="https://user-images.githubusercontent.com/79069364/144683689-e125c321-8757-4afd-956a-4227b55363bf.gif" alt="open-snippet-folder" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

Each snippet item has a toggle and a button. You can use the toggle to turn your snippet off/on.

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

You can also use the button to open your snippet with your default application for CSS files.

<img src="https://user-images.githubusercontent.com/79069364/144683696-b8c29740-94e4-48b0-b865-b2f9f6fffd61.gif" alt="open-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

On Mac, you can change your default application by right-clicking on any CSS file, then click "Get info." Then, Go to the "Open with" section and choose the application you'd like to use. Use the "Change All..." button to set this application as your default application to open CSS files.

<img src="https://raw.githubusercontent.com/yubolun/obsidian-mysnippets-plugins/master/assets/defaultApp.png" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

With MySnippets, you can change the design aesthetic. You can choose to have a "glass" style for MySnippets within the settings tab, which gives it a unique and futuristic look!

<img src="https://user-images.githubusercontent.com/79069364/144682628-d38979c2-c0d1-4709-8ecb-d9ab72c2cb77.png" alt="glass-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144682602-d31beed0-ed0e-4194-a71f-faa6a05dc945.png" alt="default-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

### Create New CSS Snippets

<img alt="create-css-snippet" src="https://user-images.githubusercontent.com/79069364/144666473-1d1b40d1-9336-48b8-9de6-d2ddca651f1b.gif" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">


## Installation

This is an updated, modernized version of the original MySnippets plugin.

### Manual Installation
1. Go to the [Releases](https://github.com/yubolun/obsidian-mysnippets-plugins/releases) page.
2. Download the `main.js`, `manifest.json`, and `styles.css` from the latest release.
3. In your vault, navigate to `.obsidian/plugins/` and create a folder named `obsidian-mysnippets-plugins`.
4. Place the downloaded files in that folder.
5. Reload Obsidian and enable the plugin in Community Plugins.

## Changelog

### 2.0.0 (Fix Update)
- **UI Overhaul**: Rebuilt the status bar menu into a modern custom popover to comply with new Obsidian API constraints.
- **Fixed Compatibility**: Resolved issues where the menu wouldn't open on Obsidian 1.15+.
- **Delete Snippet Feature**: Added a new trash button to quickly search and delete snippets right from the vault.
- **Aesthetics**: Native Obsidian button styling with accent-colored toggles and icons. Hover tooltips added for long snippet names.

## Credits & Support
Original plugin created with ❤️ by [Chetachi](https://github.com/chetachiezikeuzor).  
This `Fix` version is maintained and updated by MachineYu to keep this wonderful tool alive for modern Obsidian users!

## Support

If you find this plugin helpful and want to support its continued development, consider buying me a coffee!

<a href="https://www.buymeacoffee.com/yubolun" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

<a href="https://github.com/sponsors/yubolun" target="_blank"><img src="https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github" alt="GitHub Sponsors"></a>
