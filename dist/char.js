"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
const deva_char_types_1 = require("./deva-char-types");
var CharType;
(function (CharType) {
    CharType["Vowel"] = "vowels";
    CharType["Symbol"] = "symbols";
    CharType["VowelMark"] = "vowel_marks";
    CharType["Yogavaha"] = "yogavaahas";
    CharType["Accent"] = "accents";
    CharType["Virama"] = "virama";
    CharType["Nukta"] = "nukta";
    CharType["ZWNJ"] = "zwnj";
    CharType["ZWJ"] = "zwj";
    CharType["Consonant"] = "consonants";
    CharType["ExtraConsonant"] = "extra_consonants";
    CharType["Whitespace"] = "whitespace";
    CharType["Unrecognised"] = "unrecognised";
    CharType["EndOfInput"] = "end_of_input";
})(CharType || (CharType = {}));
const OM = "ॐ";
const MATRAS = ["೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯", "೦"];
class Char {
    value;
    type;
    constructor(value) {
        this.value = value;
        this.type = this.#getCharType(value);
    }
    #getCharType = (char) => {
        if (char === undefined)
            return CharType.EndOfInput;
        if (/\s/.test(char))
            return CharType.Whitespace;
        return deva_char_types_1.DEVA_CHAR_TYPES[char] ?? CharType.Unrecognised;
    };
    isVowel = () => this.type === CharType.Vowel;
    isConsonant = () => [CharType.Consonant, CharType.ExtraConsonant].includes(this.type);
    isOm = () => this.value === OM;
    isSymbol = () => this.type === CharType.Symbol;
    isVowelMark = () => this.type === CharType.VowelMark;
    isYogavaha = () => this.type === CharType.Yogavaha;
    isAccent = () => this.type === CharType.Accent;
    isVirama = () => this.type === CharType.Virama;
    isNukta = () => this.type === CharType.Nukta;
    isMatra = () => MATRAS.includes(this.value);
    isJoiner = () => [CharType.ZWNJ, CharType.ZWJ].includes(this.type);
    isWhitespace = () => this.type === CharType.Whitespace;
    isUnrecognised = () => this.type === CharType.Unrecognised;
    isEndOfInput = () => this.type === CharType.EndOfInput;
    isVowelAttachment = () => this.isYogavaha() || this.isAccent();
    isConsonantAttachment = () => this.isVirama() ||
        this.isYogavaha() ||
        this.isAccent() ||
        this.isVowelMark() ||
        this.isMatra();
    isVowelMarkAttachment = () => this.isYogavaha() || this.isAccent() || this.isMatra();
}
exports.Char = Char;
