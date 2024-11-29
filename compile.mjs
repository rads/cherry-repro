import * as cherry from 'cherry-cljs/lib/compiler.node.js';

cherry.compileFile({
  "in-file": "main.cljs",
  "out-file": "main.node.jsx"
});
