# nuxtjs-template

> NuxtJS + TypeScript Template.

## Env

|App|Version|
|:----|:----|
|NodeJS|10.16.2 or 12.3.1|
|Yarn|1.16.0|

**Important**
- Minimum required node version is 8.9.0
- Typescript support is now externalized. Refer to [official docs](https://typescript.nuxtjs.org) and [migration guide](https://typescript.nuxtjs.org/migration.html).

## Install

``` bash
$ mkdir [project-name] && cd [project-name]
$ git clone https://liberowork.backlog.jp/git/HTML5_TPL/nuxtjs-app.git
```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Developer's tools
1. [VSCode](https://code.visualstudio.com/)
2. [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
3. [vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)

## Structure

``` bash
$ tree -a -I 'node_modules|coverage|.git' .
(root)
├── .babelrc            # Babel configuration file.
├── .editorconfig       #
├── .eslintrc.js        # Linter configuration file.
├── .gitignore          #
├── .nuxt               # compiled files.
├── .prettierrc         # pretter configuration file.
├── CHANGELOG.md
├── README.md
├── dist                # Published generation files.
├── jest.config.js      # Test configutation file.
├── nuxt.config.ts      # Nuxt configuration file.
├── package.json
├── src                 # source directory
│   ├── app.html
│   ├── assets
│   │   └── README.md
│   ├── components      # Vue component files.
│   │   ├── Logo.vue
│   │   └── README.md
│   ├── layouts         # Vue layout files.
│   │   ├── README.md
│   │   └── default.vue
│   ├── middleware      # Vue middleware files.
│   │   └── README.md
│   ├── pages           # Vue page files.
│   │   ├── README.md
│   │   └── index.vue
│   ├── plugins         # Vue plugin files.
│   │   └── README.md
│   ├── static          # static files.
│   │   ├── README.md
│   │   └── favicon.ico
│   ├── store           # Store page
│   │   └── README.md
│   └── test
│       └── Logo.spec.js
├── tsconfig.json       # TypeScript configuration file.
└── yarn.lock
```

More information about the usage of this directory in [Directory Structure - Nuxt.js](https://nuxtjs.org/guide/directory-structure/)

## Editting vue file
Vue template is written by using pug, typescript and sass modules.

### Basic
The basic structure of template are follow.

``` html
<template lang="pug">
  <!-- HTML statement -->
</template>
<script lang="ts">
// Script statement here.
</script>
<style lang="sass">
/* Style statement here. */
</style>
```

### Example

``` html
<template lang="pug">
  div.container
    div
      logo
      h1.title nuxtjs-template
      h2.subtitle My tiptop Nuxt.js project
      div.links
        a(href="https://nuxtjs.org/", title="Documentation", target="_blank").button--green Documentation
        a(href="https://github.com/nuxt/nuxt.js", title="GitHub", target="_blank").button--grey GitHub
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class extends Vue {}
</script>
<style lang="sass">
.button--green
  display: inline-block
  border-radius: 4px
  border: 1px solid #3b8070
  color: #3b8070
  text-decoration: none
  padding: 10px 30px
</style>
```

### Links
- [pugjs](https://pugjs.org/api/getting-started.html)
- [sass](https://sass-lang.com/documentation)
