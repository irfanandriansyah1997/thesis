# Style Guide

[![Build Status](https://travis-ci.com/urbanindo/style-guide.svg?token=3V7pjCzXDjWyUYpawgCK&branch=master)](https://travis-ci.com/urbanindo/style-guide) <img src="https://img.shields.io/npm/v/component-ninetynine.svg"> [![codecov](https://codecov.io/gh/urbanindo/style-guide/branch/master/graph/badge.svg?token=bqgdBKlcgv)](https://codecov.io/gh/urbanindo/style-guide)

Tujuan dibuat repositori ini adalah untuk mengumpulkan component berupa atom, molekul, organism pada website portal 99.co indonesia. diharapkan dengan membuat component ini mengurangi duplikasi kode pada website tersebut.

## Cara Instalasi

Jika anda ingin menggunakan library ini anda dapat menginstal menggunakan yarn atau npm dengan cara

```
yarn add component-ninetynine@<version-library>
```

```
npm install --save component-ninetynine@<version-library>
```

## Design Pattern (TODO)
- [atomic design pattern](https://bradfrost.com/blog/post/atomic-web-design/)
- [abstract factory pattern](https://refactoring.guru/design-patterns/abstract-factory)
- repository pattern
- builder pattern


## Library & Minimum Requirement (TODO)

* ### node js 12+
    node js yang digunakan minimal menggunakan versi 12 keatas

* ### webpack
    webpack digunakan untuk melakukan build asset untuk dokumentasi dihalaman github pages

* ### gulp
    gulp digunakan untuk melakukan build asset styling berupa file css

* ### rollup
    rollup digunakan untuk melakukan build asset javascript dan dts (jika menggunakan typescript)

## Cara Pengerjaan (TODO)

- jalankan perintah di dalam terminal `make init-dev` <b>hanya pada saat awal pengerjaan saja</b>
- lalu jika suda selesai anda dapat menjalankan `make run-dev`
- lalu jalankan port 8008

## Cara Build Library

apabila anda ingin mencoba build library anda dapat menggunakan cara dibawah ini:

### Build Asset Library (TODO)
```
make build-asset
```

### Build Asset Dokumentasi (TODO)
```
make build-documentation
```

## Penamaan File

Jika anda ingin membuat suatu modules / file maka anda dapat mengacu pada aturan nama yang telah tersedia seperti dibawah ini:

### Penamaan File TS / TSX

| Tipe File        | Penamaan File          | Penamaan Class / Fungsi           |
| ------------- |:-------------|:-------------|
| Abstract File | `abstract-name.abstract.(ts/tsx)`      | `<nama-file>Abstract` |
| Builder File | `builder-name.builder.(ts/tsx)`      |`<nama-file>Builder` |
| Config File | `config-name.config.ts`      |`-` |
| Constant File | `constant-name.const.ts`      |`-` |
| Documentation TSX Component | `component-name.documentation.tsx`      |`<nama-file>Documentation` |
| Helper Library | `helper-name.helper.ts`      |`<nama-file>Helper` |
| Interface      | `file-name.interface.ts`      |`<nama-file>Interface` |
| React Context File | `context-name.context.ts`      |`<nama-file>Context` |
| TSX Component | `component-name.component.tsx`      |`<nama-file>Component` |
| Typings File | `typings-name.typings.d.ts`      |`<nama-file>Abstract` |
| Unit Testing File | `component-name.spec.(ts/tsx)`      |`-` |
| View File | `view-name.view.ts`      |`<nama-file>View` |

### Penamaan File CSS / SCSS

| Tipe File        | Penamaan           |
| ------------- |:-------------|
| CSS Component | `style.css` |
| SCSS Component | `style.scss` |
| Animation Style | `animation-name.animation.scss` |
| Function File | `function-name.function.scss` |
| Helper File | `helper-name.helper.scss` |
| Mixin File | `mixin-name.mixin.scss` |
| Transition File | `transition-name.transition.scss` |
| Variable File | `variable-name.variable.scss` |

## Cara Penulisan

Jika anda ingin menambahkan atau merubah source code component yang ada anda dapat mengikuti rules yang sudah ada seperti dibawah ini:

### Pure Class Component
```javascript
import * as React from 'react';
import { Component, ReactNode } from 'react';

import { ComponentPropsInterface } from './interface/component-name.component.interface';

/**
 * Component-Name Component
 * @author author-name <author-email@99.co>
 * @since 2020.03.09
 */
class ComponentNameComponent extends Component<ComponentPropsInterface> {
    render(): ReactNode {
        return <div />;
    }
}

export default ComponentNameComponent;
```

### Stateless Component
```javascript
import * as React from 'react';
import { SFC, ReactNode } from 'react';

import { ComponentPropsInterface } from './interface/component-name.component.interface';

/**
 * Component-Name Component
 * @author author-name <author-email@99.co>
 * @since 2020.03.09
 */
export const ComponentNameComponent: SFC<ComponentPropsInterface> = (props: ComponentPropsInterface) => {
    return (
        <div />
    )
}

export default ComponentNameComponent;
```

## Struktur Direktori

Untuk saat ini pada library ini menggunakan sturktur folder seperti ini, Jika ada yang merasa implementasi saat ini tidak seperti dibawah ini, jangan ragu untuk mengoreksi hal ini.

```
├── etc
│   ├── git-hooks
│   ├── gulp
│   ├── jest
│   ├── rollup
│   └── webpack
│       └── library
└── src
    ├── common                      # e.g. "button, text component"
    │   ├── atomic
    |   |    └── component
    │   |       ├── documentation
    │   |       ├── interface
    │   |       └── style
    │   ├── molecules
    │   └── organism
    ├── desktop                     # e.g. "desktop navbar component"
    ├── mobile                      # e.g. "mobile dialog component"
    ├── documentation               # e.g. "layout for documentation"
    │   ├── modules                 # e.g. "documentation modules & router"
    │   │   ├── common              # e.g. "documentation modules for common component"
    │   │   ├── desktop             # e.g. "documentation modules for desktop component"
    │   │   └── mobile              # e.g. "documentation modules for mobile component"
    │   └── core                    # e.g. "documentation view, router config, component"
    ├── shared
    │   ├── abstract
    │   ├── builder
    │   ├── config
    │   ├── constant
    │   ├── helper
    │   ├── interface
    │   └── typings
    └── style
        ├── animation
        ├── function
        ├── helper
        ├── mixin
        ├── transition
        └── variable
```

## Cara Membuat Component

Apabila anda ingin membuat component maka berikut hal yang anda harus ikuti adalah sebagai berikut:

- buatlah component pada direktori common, desktop atau mobile dengan format sebagai berikut:
  ```
  └── (nama component)
      ├── documentation
      |   └── (nama component).documentation.tsx
      ├── interface
      |   └── component.interface.ts
      ├── style
      |   └── style.scss
      └── (nama component).component.tsx
  ```
  | Nama File        | Direktori           | Fungsi           |
  | ------------- |:-------------|:-------------|
  | (nama component).documentation.tsx | `documentation` | File ini dibuat dengan tujuan untuk dokumentasi component tersebut. |
  | component.interface.ts | `interface` | Interface yang akan digunakan pada component tersebut. |
  | style.scss | `style` | SCSS file component tersebut. |

- Daftarkan file component yang telah anda buat pada `etc/rollup/constant` entah common, desktop atau mobile component.
- Jika anda ingin mendaftarkan component anda pada dokumentasi yang telah tersedia maka anda dapat mendaftarkan di beberapa file ini:
  - common  : `src/documentation/modules/common/common.documentation.tsx`
  - desktop : `src/documentation/modules/desktop/desktop.documentation.tsx`
  - mobile  : `src/documentation/modules/mobile/mobile.documentation.tsx`