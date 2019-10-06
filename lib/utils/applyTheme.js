"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTheme = function (theme) {
    var root = document.documentElement;
    Object.entries(theme).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        root.style.setProperty("--" + key, value);
    });
};
//# sourceMappingURL=applyTheme.js.map