"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utils_1 = require("../utils");
exports.ThemeContext = react_1.createContext({
    change: utils_1.noop,
    current: 'default',
    themes: ['default'],
});
//# sourceMappingURL=ThemeContext.js.map