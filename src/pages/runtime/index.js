var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0),
    require('./initGameGlobal.js');
var r = e(require('./unity-manager'));
require('./unity-adapter');
var t = r.default;
exports.default = t;
