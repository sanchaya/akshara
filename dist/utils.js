"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVowel = exports.filterTokens = exports.extractVarnas = void 0;
const extractVarnas = (aksharas) => aksharas.flatMap((akshara) => akshara.attributes?.varnas);
exports.extractVarnas = extractVarnas;
const filterTokens = (tokens, tokenType) => tokens.filter((token) => token.type === tokenType);
exports.filterTokens = filterTokens;
const getVowel = (vowelMark) => ({}[vowelMark] || "");
exports.getVowel = getVowel;
