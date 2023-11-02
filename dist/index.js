"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarnaType = exports.TokenType = void 0;
const utils = require("./utils");
const tokenize_1 = require("./tokenize");
const token_1 = require("./token");
Object.defineProperty(exports, "TokenType", { enumerable: true, get: function () { return token_1.TokenType; } });
const varna_1 = require("./varna");
Object.defineProperty(exports, "VarnaType", { enumerable: true, get: function () { return varna_1.VarnaType; } });
const analyse = (input) => {
    const tokens = (0, tokenize_1.tokenize)(input);
    const aksharas = utils.filterTokens(tokens, token_1.TokenType.Akshara);
    const varnas = utils.extractVarnas(aksharas);
    const chars = input.split("");
    const symbols = utils.filterTokens(tokens, token_1.TokenType.Symbol);
    const invalidChars = utils.filterTokens(tokens, token_1.TokenType.Invalid);
    const whitespaces = utils.filterTokens(tokens, token_1.TokenType.Whitespace);
    const unrecognisedChars = utils.filterTokens(tokens, token_1.TokenType.Unrecognised);
    return {
        all: tokens,
        aksharas: aksharas,
        varnas: varnas,
        chars: chars,
        symbols: symbols,
        invalid: invalidChars,
        whitespaces: whitespaces,
        unrecognised: unrecognisedChars,
    };
};
const Aksharas = {
    analyse,
    TokenType: token_1.TokenType,
    VarnaType: varna_1.VarnaType,
};
exports.default = Aksharas;
