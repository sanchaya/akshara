"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Varna = exports.VARNAS = exports.VarnaType = void 0;
var VarnaType;
(function (VarnaType) {
    VarnaType["Svara"] = "svara";
    VarnaType["Vyanjana"] = "vyanjana";
})(VarnaType || (exports.VarnaType = VarnaType = {}));
exports.VARNAS = {
    Virama: "्",
    InherentA: "अ",
    Om: ["ओ", "म्"],
};
class Varna {
    type;
    value;
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
exports.Varna = Varna;
