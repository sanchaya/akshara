"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = void 0;
const char_1 = require("./char");
const utils_1 = require("./utils");
const token_1 = require("./token");
const varna_1 = require("./varna");
var State;
(function (State) {
    State[State["Initial"] = 0] = "Initial";
    State[State["Vowel"] = 1] = "Vowel";
    State[State["Consonant"] = 2] = "Consonant";
    State[State["ConjunctConsonant"] = 3] = "ConjunctConsonant";
})(State || (State = {}));
const tokenize = (input) => {
    const tokens = [];
    let pos = 0;
    let acc = "";
    let svaraAcc = "";
    let vyanjanaAcc = "";
    let varnas = [];
    let state = State.Initial;
    const resetVariables = () => {
        pos = 0;
        acc = "";
        svaraAcc = "";
        vyanjanaAcc = "";
        varnas = [];
        state = State.Initial;
    };
    const createToken = (tokenType, attributes) => {
        tokens.push(new token_1.Token(tokenType, acc, pos, attributes));
        resetVariables();
    };
    for (let i = 0, l = input.length; i < l; i += 1) {
        const char = new char_1.Char(input[i]);
        const nextChar = new char_1.Char(input[i + 1]);
        acc += char.value;
        switch (state) {
            case State.Initial: {
                pos = i;
                if (char.isOm()) {
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Svara, varna_1.VARNAS.Om[0]),
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, varna_1.VARNAS.Om[1]),
                        ]),
                    });
                    break;
                }
                if (char.isSymbol()) {
                    createToken(token_1.TokenType.Symbol);
                    break;
                }
                if (char.isWhitespace()) {
                    createToken(token_1.TokenType.Whitespace);
                    break;
                }
                if (char.isUnrecognised()) {
                    createToken(token_1.TokenType.Unrecognised);
                    break;
                }
                if (char.isVowel()) {
                    if (nextChar.isVowelAttachment()) {
                        state = State.Vowel;
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([new varna_1.Varna(varna_1.VarnaType.Svara, acc)]),
                    });
                    break;
                }
                if (char.isConsonant()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                        state = State.Consonant;
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc + varna_1.VARNAS.Virama),
                            new varna_1.Varna(varna_1.VarnaType.Svara, varna_1.VARNAS.InherentA),
                        ]),
                    });
                    break;
                }
                createToken(token_1.TokenType.Invalid);
                break;
            }
            case State.Vowel: {
                if (char.isAccent()) {
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([new varna_1.Varna(varna_1.VarnaType.Svara, acc)]),
                    });
                    break;
                }
                if (char.isYogavaha()) {
                    if (nextChar.isAccent()) {
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([new varna_1.Varna(varna_1.VarnaType.Svara, acc)]),
                    });
                    break;
                }
                break;
            }
            case State.Consonant: {
                if (char.isNukta()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isConsonantAttachment()) {
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc + varna_1.VARNAS.Virama),
                            new varna_1.Varna(varna_1.VarnaType.Svara, varna_1.VARNAS.InherentA),
                        ]),
                    });
                    break;
                }
                if (char.isVirama()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) {
                        break;
                    }
                    if (nextChar.isConsonant()) {
                        varnas = varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc),
                        ]);
                        state = State.ConjunctConsonant;
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc)]),
                    });
                    break;
                }
                if (char.isJoiner()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) {
                        break;
                    }
                    if (nextChar.isConsonant()) {
                        varnas = varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc),
                        ]);
                        state = State.ConjunctConsonant;
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc)]),
                    });
                    break;
                }
                if (char.isVowelMarkAttachment()) {
                    svaraAcc = (svaraAcc || varna_1.VARNAS.InherentA) + char.value;
                    if (nextChar.isAccent()) {
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc + varna_1.VARNAS.Virama),
                            new varna_1.Varna(varna_1.VarnaType.Svara, svaraAcc),
                        ]),
                    });
                    break;
                }
                if (char.isVowelMark()) {
                    svaraAcc = (0, utils_1.getVowel)(char.value);
                    if (nextChar.isVowelMarkAttachment()) {
                        break;
                    }
                    createToken(token_1.TokenType.Akshara, {
                        varnas: varnas.concat([
                            new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc + varna_1.VARNAS.Virama),
                            new varna_1.Varna(varna_1.VarnaType.Svara, svaraAcc),
                        ]),
                    });
                    break;
                }
            }
            case State.ConjunctConsonant: {
                vyanjanaAcc = char.value;
                if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                    state = State.Consonant;
                    break;
                }
                createToken(token_1.TokenType.Akshara, {
                    varnas: varnas.concat([
                        new varna_1.Varna(varna_1.VarnaType.Vyanjana, vyanjanaAcc + varna_1.VARNAS.Virama),
                        new varna_1.Varna(varna_1.VarnaType.Svara, varna_1.VARNAS.InherentA),
                    ]),
                });
                break;
            }
            default: {
                break;
            }
        }
    }
    return tokens;
};
exports.tokenize = tokenize;
