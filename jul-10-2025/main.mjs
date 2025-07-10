import * as cherry_core from 'cherry-cljs/cljs.core.js';
cherry_core.println.call(null, (cherry_core.array_map(cherry_core.keyword("a"), 1)) !== (cherry_core.array_map(cherry_core.keyword("a"), 1)));
