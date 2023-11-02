"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TokenType = void 0;
var TokenType;
(function (TokenType) {
    TokenType["Akshara"] = "akshara";
    TokenType["Symbol"] = "symbol";
    TokenType["Whitespace"] = "whitespace";
    TokenType["Invalid"] = "invalid";
    TokenType["Unrecognised"] = "unrecognised";
})(TokenType || (exports.TokenType = TokenType = {}));
class Token {
    type;
    value;
    from;
    to;
    attributes;
    constructor(type, value, pos, attributes) {
        this.type = type;
        this.value = value;
        this.from = pos;
        this.to = pos + (value.length - 1);
        this.attributes = attributes;
    }
}
exports.Token = Token;
