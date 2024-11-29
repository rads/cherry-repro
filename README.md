# cherry-repro

```
$ npm ci
$ npx cherry compile main.cljs --out-file main.cli.jsx
$ node compile.mjs
$ diff main.cli.jsx main.node.jsx
[cherry] Compiling CLJS file: main.cljs
[cherry] Wrote file: /Users/rads/src/cherry-repro/main.cli.jsx
1c1
< import * as cherry_core from 'cherry-cljs/cljs.core.js';
---
> import * as squint_core from 'squint-cljs/core.js';
3c3
< var App = (function (_) {
---
> var App = function (_) {
5c5
< });
---
> };
```
