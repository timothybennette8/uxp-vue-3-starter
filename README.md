# Vue 3 Starter for Photoshop UXP

✨ Composition API
✨ <script setup>
✨ Composables
✨ Pinia
✨ Tailwind (W.I.P - see dev branch)

## Install dependencies

First ensure that your terminal is in the root of this project. Then:

For `yarn` users, install all dependencies using:

```
yarn install
```

For `npm` users, install all dependencies using:

```
npm install
```

## Build Process

There are two ways to build the plugin for use in Adobe Photoshop:

- `yarn watch` or `npm run watch` will build a development version of the plugin, and recompile everytime you make a change to the source files. The result is placed in `dist/dev`.
- `yarn build` or `npm run build` will build a production version of the plugin and place it in `dist/production`. It will not update every time you make a change to the source files.

> You **must** run either `watch` or `build` prior to trying to use within Photoshop!

## Launching in Photoshop

You can use the UXP Developer Tools to load the plugin into Photoshop.

If the plugin hasn't already been added to your workspace in the UXP Developer Tools, you can add it by clicking "Add Plugin..." and selecting either `dist/dev/manifest.json` or `dist/production/manifest.json`. **DO NOT** select the `manifest.json` file inside the `plugin` folder.

Once added, you can load it into Photoshop by clicking the ••• button on the corresponding row, and clicking "Load". Switch to Photoshop and you should see the starter panel.

## What this plugin does

This plugin is a demonstration of using Vue 3 in UXP. It has a single panel that allows you to list the active document's layers or channels using an `<sp-dropdown>` component and Vue's `v-model`.
It also has a modal that is triggered form the flyout menu that demonstrates the use of Pinia .
The plugin uses the Vue Composition API and `<script setup>` syntax and utitlises Vue composables.

I'm also attempting to implement Tailwind CSS and progress on that can be found in the `dev` branch. In short - semi-successful, but needs a complete re-load (including restarting Webpack) for some changes to be applied.
