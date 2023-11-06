import { Token, TokenType } from "./token";
import { Varna } from "./varna";

export const extractVarnas = (aksharas: Token[]): Varna[] =>
  aksharas.flatMap((akshara) => akshara.attributes?.varnas);

export const filterTokens = (tokens: Token[], tokenType: TokenType) =>
  tokens.filter((token) => token.type === tokenType);

export const getVowel = (vowelMark: string): string =>
  ({
    "ா": "ஆ",
    "ி": "இ",
    "◌ீ": "ஈ",
    "ு": "உ",
    "ூ": "ஊ",
    "ெ": "எ",
    "ே": "ஏ",
    "ை": "ஐ",
    "ொ": "ஒ",
    "ோ": "ஓ",
    "ௌ": "ஔ",
  }[vowelMark] || "");
