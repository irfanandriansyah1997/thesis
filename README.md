# Style Guide

[![Build Status](https://travis-ci.com/urbanindo/style-guide.svg?token=3V7pjCzXDjWyUYpawgCK&branch=master)](https://travis-ci.com/urbanindo/style-guide) [![codecov](https://codecov.io/gh/urbanindo/style-guide/branch/master/graph/badge.svg?token=bqgdBKlcgv)](https://codecov.io/gh/urbanindo/style-guide)

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

* ### storybook
    storybook digunakan untuk melakukan build asset dan showcase dokumentasi dihalaman github pages

* ### gulp
    gulp digunakan untuk melakukan build asset styling berupa file css

* ### rollup
    rollup digunakan untuk melakukan build asset javascript dan dts (jika menggunakan typescript)

## Cara Pengerjaan (TODO)

- jalankan perintah di dalam terminal `make init-dev` <b>hanya pada saat awal pengerjaan saja</b>
- lalu jika suda selesai anda dapat menjalankan `make run-dev`
- lalu jalankan port 5000

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
| Documentation TSX Component | `component-name.stories.tsx`      | `-` |
| Template Documentation | `template-name.stories.tsx`      | `-` |
| Section Documentation | `section-name.stories.tsx`      | `-` |
| Helper Library | `helper-name.helper.ts`      |`<nama-file>Helper` |
| Interface      | `file-name.interface.ts`      |`<nama-file>Interface` |
| React Context File | `context-name.context.ts`      |`<nama-file>Context` |
| TSX Component | `component-name.component.tsx`      |`<nama-file>Component` |
| Typings File | `typings-name.typings.d.ts`      |`<nama-file>Abstract` |
| Unit Testing File | `component-name.spec.(ts/tsx)`      |`-` |
| Fixture Testing File | `fixture-name.spec.(ts/tsx)`      |`-` |
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
    ├── .storybook
    │      ├── builder
    │      └── component
    │          ├── atomic
    │          ├── molecules
    │          └── templates
    ├── common                      # e.g. "button, text component"
    │   ├── atomic
    |   |    └── component
    │   |       ├── storybook
    │   |       ├── interface
    │   |       ├── style
    │   |       └── test
    │   ├── molecules
    │   └── organism
    ├── desktop                     # e.g. "desktop navbar component"
    ├── mobile                      # e.g. "mobile dialog component"
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
      ├── storybook
      |   ├── templates
      |   |    ├── template-(nama template1).stories.tsx
      |   |    └── template-(nama template2).stories.tsx
      |   ├── section
      |   |    ├── section-(nama section1).stories.tsx
      |   |    └── section-(nama section2).stories.tsx
      |   ├── markdown
      |   |    └── (nama-component).documentation.md
      |   └── (nama component).stories.tsx
      ├── interface
      |   └── component.interface.ts
      ├── style
      |   └── style.scss
      ├── test
      |   └── (nama-component).spec.tsx
      |   └── fixture-(nama-component).spec.tsx
      └── (nama component).component.tsx
  ```
  | Nama File        | Direktori           | Fungsi           |
  | ------------- |:-------------|:-------------|
  | (nama component).stories.tsx | `storybook` | File ini dibuat dengan tujuan untuk dokumentasi component tersebut. |
  | template-(nama template).stories.tsx | `storybook/template` | File ini dibuat dengan tujuan untuk membuat mock file yang berisi array yang digunakan pada storybook file maupun section |
  | section-(nama section).stories.tsx | `storybook/section` | File ini dibuat dengan tujuan untuk menjelaskan beberapa section berupa props maupun lainya |
  | (nama-component).documentation.md | `storybook/markdown` | File ini dibuat dengan tujuan untuk membuat informasi berupa tabel props dan cara implementasi component tersebut |
  | component.interface.ts | `interface` | Interface yang akan digunakan pada component tersebut. |
  | style.scss | `style` | SCSS file component tersebut. |
  | (nama-component)).spec.tsx | `test` | unit test file component tersebut. |
  | fixture-(nama-component)).spec.tsx | `test` | berisi constanta array yang sesuai dengan props component tersebut yang bertujuan untuk melakukan mocking props . |

- Daftarkan file component yang telah anda buat pada `etc/rollup/constant` entah common, desktop atau mobile component.
- Jika anda ingin mendaftarkan component anda pada dokumentasi yang telah tersedia maka anda hanya membuat file `<nama-component>.stories.tsx` pada folder storybook.


## Catatan
- [Rollup](https://rollupjs.org/guide/en/#quick-start)
- [Unit Testing](https://jestjs.io/docs/en/tutorial-react)
- [Membuat File Storybook](https://storybook.js.org/docs/basics/writing-stories/)
