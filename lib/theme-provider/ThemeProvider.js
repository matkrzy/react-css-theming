"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ThemeContext_1 = require("../context/ThemeContext");
var utils_1 = require("../utils");
exports.ThemeProvider = function (props) {
    var themes = props.themes, children = props.children, _a = props.theme, defaultTheme = _a === void 0 ? 'default' : _a;
    var _b = react_1.useState(defaultTheme), theme = _b[0], setTheme = _b[1];
    react_1.useEffect(function () {
        utils_1.applyTheme(utils_1.getTheme(theme, themes));
    }, [theme, themes]);
    var availableThemes = react_1.useMemo(function () { return Object.keys(themes); }, [themes]);
    var contextValue = react_1.useMemo(function () { return ({
        current: theme,
        change: setTheme,
        themes: availableThemes,
    }); }, [theme, themes]);
    return react_1.default.createElement(ThemeContext_1.ThemeContext.Provider, { value: contextValue }, children);
};
//# sourceMappingURL=ThemeProvider.js.map