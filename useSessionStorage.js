"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useStorage = function () {
    var storageType = function (type) { return "".concat(type !== null && type !== void 0 ? type : 'session', "Storage"); };
    var isBrowser = (function () { return typeof window !== 'undefined'; })();
    var getItem = function (key, type) {
        return isBrowser ? window[storageType(type)][key] : '';
    };
    var setItem = function (key, value, type) {
        if (isBrowser) {
            window[storageType(type)].setItem(key, value);
            return true;
        }
        return false;
    };
    var removeItem = function (key, type) {
        window[storageType(type)].removeItem(key);
    };
    return {
        getItem: getItem,
        setItem: setItem,
        removeItem: removeItem,
    };
};
exports.default = useStorage;