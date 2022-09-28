# Kiwi #

This README documents whatever steps are necessary to get this project running up.

### What is this repository for? ###

* This Image repository is to support API automation tests.

### Prerequisites

- Docker

### How to Getting Started

```sh
$ cd [project]
$ docker build -t SOURCE_IMAGE_NAME/IMAGE_NAME:[TAG] .
```

### Node Package ###

    kiwi@1.0.0
    ├─┬ https://opencollective.com/mochajs
    │ │ └── mocha@10.0.0
    │ ├─┬ https://paulmillr.com/funding/
    │ │ │ └── chokidar@3.5.3
    │ │ └── https://github.com/sponsors/jonschlinkert
    │ │     └── picomatch@2.3.1
    │ ├── https://github.com/sponsors/sindresorhus
    │ │   └── escape-string-regexp@4.0.0, find-up@5.0.0, locate-path@6.0.0, p-locate@5.0.0, p-limit@3.1.0, yocto-queue@0.1.0, log-symbols@4.1.0, is-unicode-supported@0.1.0, strip-json-comments@3.1.1, camelcase@6.3.0, decamelize@4.0.0, globals@13.17.0, type-fest@0.20.2, globby@11.1.0, import-fresh@3.3.0, cli-truncate@2.1.0, get-stream@6.0.1, is-stream@3.0.0, npm-run-path@5.1.0, path-key@4.0.0, onetime@6.0.0, mimic-fn@4.0.0, strip-final-newline@3.0.0, log-update@4.0.0, ansi-escapes@4.3.2, type-fest@0.21.3, onetime@5.1.2, p-map@4.0.0
    │ ├── https://github.com/sponsors/isaacs
    │ │   └── glob@7.2.0, rimraf@3.0.2
    │ ├── https://github.com/chalk/supports-color?sponsor=1
    │ │   └── supports-color@8.1.1
    │ ├── https://github.com/sponsors/feross
    │ │   └── safe-buffer@5.2.1, run-parallel@1.2.0, queue-microtask@1.2.3, eslint-config-standard@17.0.0, eslint-plugin-standard@5.0.0
    │ └── https://github.com/chalk/wrap-ansi?sponsor=1
    │     └── wrap-ansi@7.0.0
    ├─┬ https://opencollective.com/eslint
    │ │ └── eslint@8.24.0, @eslint/eslintrc@1.3.2, espree@9.4.0
    │ ├── https://github.com/sponsors/nzakas
    │ │   └── @humanwhocodes/gitignore-to-minimatch@1.0.2, @humanwhocodes/module-importer@1.0.1
    │ ├── https://github.com/sponsors/epoberezkin
    │ │   └── ajv@6.12.6
    │ └── https://github.com/sponsors/mysticatea
    │     └── eslint-utils@3.0.0, regexpp@3.2.0, eslint-plugin-n@15.3.0, eslint-plugin-es@4.1.0, eslint-utils@2.1.0, eslint-plugin-es@3.0.1
    ├── https://github.com/sponsors/typicode
    │   └── husky@8.0.1
    ├─┬ https://opencollective.com/lint-staged
    │ │ └── lint-staged@13.0.3
    │ └── https://github.com/sindresorhus/execa?sponsor=1
    │     └── execa@6.1.0
    ├── https://github.com/prettier/prettier?sponsor=1
    │   └── prettier@2.7.1
    └── https://ko-fi.com/tunnckoCore/commissions
        └── formidable@2.0.1