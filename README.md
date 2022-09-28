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

    sdet@1.0.1
    ├─┬ https://opencollective.com/mochajs
    │ │ └── mocha@9.2.2
    │ ├─┬ https://paulmillr.com/funding/
    │ │ │ └── chokidar@3.5.3
    │ │ └── https://github.com/sponsors/jonschlinkert
    │ │     └── picomatch@2.3.1
    │ ├── https://github.com/sponsors/sindresorhus
    │ │   └── escape-string-regexp@4.0.0, find-up@5.0.0, locate-path@6.0.0, p-locate@5.0.0, p-limit@3.1.0, yocto-queue@0.1.0, log-symbols@4.1.0, is-unicode-supported@0.1.0, strip-json-comments@3.1.1, camelcase@6.3.0, decamelize@4.0.0, replace-string@3.1.0, globals@12.4.0, import-fresh@3.3.0, ansi-escapes@4.3.2, type-fest@0.21.3, figures@3.2.0, onetime@5.1.2, p-limit@2.3.0, parse-json@5.2.0, get-stream@5.2.0, is-stream@2.0.1
    │ ├── https://github.com/sponsors/isaacs
    │ │   └── glob@7.2.0, glob@7.2.3, rimraf@3.0.2
    │ ├── https://github.com/chalk/supports-color?sponsor=1
    │ │   └── supports-color@8.1.1
    │ └── https://github.com/chalk/wrap-ansi?sponsor=1
    │     └── wrap-ansi@7.0.0
    ├─┬ https://opencollective.com/eslint
    │ │ └── eslint@6.8.0
    │ └── https://github.com/sponsors/epoberezkin
    │     └── ajv@6.12.6
    ├── https://github.com/sponsors/feross
    │   └── eslint-plugin-standard@4.1.0, run-parallel@1.2.0, queue-microtask@1.2.3
    ├── https://opencollective.com/husky
    │   └── husky@3.1.0
    ├── https://github.com/prettier/prettier?sponsor=1
    │   └── prettier@2.7.1
    ├── https://github.com/sponsors/RubenVerborgh
    │   └── follow-redirects@1.15.2
    ├─┬ https://ko-fi.com/tunnckoCore/commissions
    │ │ └── formidable@2.0.1
    │ └── https://github.com/sponsors/ljharb
    │     └── qs@6.9.3, qs@6.11.0, side-channel@1.0.4, call-bind@1.0.2, get-intrinsic@1.1.3, has-symbols@1.0.3, object-inspect@1.12.2, array-includes@3.1.5, define-properties@1.1.4, has-property-descriptors@1.0.0, es-abstract@1.20.3, es-to-primitive@1.2.1, is-date-object@1.0.5, has-tostringtag@1.0.0, is-symbol@1.0.4, function.prototype.name@1.1.5, functions-have-names@1.2.3, get-symbol-description@1.0.0, is-callable@1.2.7, is-negative-zero@2.0.2, is-regex@1.1.4, is-shared-array-buffer@1.0.2, is-weakref@1.0.2, object.assign@4.1.4, regexp.prototype.flags@1.4.3, safe-regex-test@1.0.0, string.prototype.trimend@1.0.5, string.prototype.trimstart@1.0.5, unbox-primitive@1.0.2, has-bigints@1.0.2, which-boxed-primitive@1.0.2, is-bigint@1.0.4, is-boolean-object@1.1.2, is-number-object@1.0.7, is-string@1.0.7, array.prototype.flat@1.3.0, is-core-module@2.10.0, object.values@1.1.5, resolve@1.22.1, supports-preserve-symlinks-flag@1.0.0
    └── https://github.com/sponsors/mysticatea
        └── eslint-utils@2.1.0