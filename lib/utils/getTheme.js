"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = function (theme, themes) {
    if (!themes.hasOwnProperty('default')) {
        throw new Error('Default Theme is required');
    }
    if (themes.hasOwnProperty(theme)) {
        return themes[theme];
    }
    else {
        console.warn("Cannot find theme \"" + theme + "\". Theme is set to default");
        return themes.default;
    }
};
//# sourceMappingURL=getTheme.js.map