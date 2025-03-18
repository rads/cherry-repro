import * as cherry_core from 'cherry-cljs/cljs.core.js';
cherry_core.add_tap.call(null, cherry_core.prn);
cherry_core.tap_GT_.call(null, cherry_core.keyword("foo"));
cherry_core.prn.call(null, cherry_core.keyword("foo2"));
setTimeout((function () {
return cherry_core.remove_tap.call(null, cherry_core.prn)
}), 1000);
