const $fab42eb3dee39b5b$export$829ee63b3dace6ab = (aksharas)=>aksharas.flatMap((akshara)=>akshara.attributes?.varnas);
const $fab42eb3dee39b5b$export$99699e6242229250 = (tokens, tokenType)=>tokens.filter((token)=>token.type === tokenType);
const $fab42eb3dee39b5b$export$a93666e9003b61ba = (vowelMark)=>({
        "\u0BBE": "\u0B86",
        "\u0BBF": "\u0B87",
        "\u25CC\u0BC0": "\u0B88",
        "\u0BC1": "\u0B89",
        "\u0BC2": "\u0B8A",
        "\u0BC6": "\u0B8E",
        "\u0BC7": "\u0B8F",
        "\u0BC8": "\u0B90",
        "\u0BCA": "\u0B92",
        "\u0BCB": "\u0B93",
        "\u0BCC": "\u0B94"
    })[vowelMark] || "";


const $159c3eadedf03557$export$81441ef93d55980e = {
    "\u0B85": "vowels",
    "\u0B86": "vowels",
    "\u0B87": "vowels",
    "\u0B88": "vowels",
    "\u0B89": "vowels",
    "\u0B8A": "vowels",
    "\u0B8E": "vowels",
    "\u0B8F": "vowels",
    "\u0B90": "vowels",
    "\u0B92": "vowels",
    "\u0B93": "vowels",
    "\u0B94": "vowels",
    "\u0B83": "vowels",
    "\u0B95": "consonants",
    "\u0B99": "consonants",
    "\u0B9A": "consonants",
    "\u0B9E": "consonants",
    "\u0B9F": "consonants",
    "\u0BA3": "consonants",
    "\u0BA4": "consonants",
    "\u0BA8": "consonants",
    "\u0BAA": "consonants",
    "\u0BAE": "consonants",
    "\u0BAF": "consonants",
    "\u0BB0": "consonants",
    "\u0BB2": "consonants",
    "\u0BB5": "consonants",
    "\u0BB4": "consonants",
    "\u0BB3": "consonants",
    "\u0BB1": "consonants",
    "\u0BA9": "consonants",
    "\u0B9C": "extra_consonants",
    "\u0BB6": "extra_consonants",
    "\u0BB7": "extra_consonants",
    "\u0BB8": "extra_consonants",
    "\u0BB9": "extra_consonants",
    "\u0BCD": "vowel_marks",
    "\u0BBE": "vowel_marks",
    "\u0BBF": "vowel_marks",
    "\u0BC0": "vowel_marks",
    "\u0BC1": "vowel_marks",
    "\u0BC2": "vowel_marks",
    "\u0BC6": "vowel_marks",
    "\u0BC7": "vowel_marks",
    "\u0BC8": "vowel_marks",
    "\u0BCA": "vowel_marks",
    "\u0BCB": "vowel_marks",
    "\u0BCC": "vowel_marks",
    "\u0BD7": "vowel_marks",
    "\u200D": "zwj",
    "\u200C": "zwnj",
    "\u0BE6": "symbols",
    "\u0BE7": "symbols",
    "\u0BE8": "symbols",
    "\u0BE9": "symbols",
    "\u0BEA": "symbols",
    "\u0BEB": "symbols",
    "\u0BED": "symbols",
    "\u0BEE": "symbols",
    "\u0BEF": "symbols",
    "\u0BF0": "symbols",
    "\u0BF1": "symbols",
    "\u0BF2": "symbols",
    "\u0BD0": "symbols",
    "\u0964": "symbols",
    "\u0965": "symbols"
};


var $21fe2fa54792efd1$var$CharType;
(function(CharType) {
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
})($21fe2fa54792efd1$var$CharType || ($21fe2fa54792efd1$var$CharType = {}));
const $21fe2fa54792efd1$var$OM = "\u0BD0";
const $21fe2fa54792efd1$var$MATRAS = [
    "\u0BE7",
    "\u0BE8",
    "\u0BE9"
];
class $21fe2fa54792efd1$export$3ae2e3e9a9c21123 {
    constructor(value){
        this.#getCharType = (char)=>{
            if (char === undefined) return "end_of_input";
            if (/\s/.test(char)) return "whitespace";
            return (0, $159c3eadedf03557$export$81441ef93d55980e)[char] ?? "unrecognised";
        };
        this.isVowel = ()=>this.type === "vowels";
        this.isConsonant = ()=>[
                "consonants",
                "extra_consonants"
            ].includes(this.type);
        this.isOm = ()=>this.value === $21fe2fa54792efd1$var$OM;
        this.isSymbol = ()=>this.type === "symbols";
        this.isVowelMark = ()=>this.type === "vowel_marks";
        this.isYogavaha = ()=>this.type === "yogavaahas";
        this.isAccent = ()=>this.type === "accents";
        this.isVirama = ()=>this.type === "virama";
        this.isNukta = ()=>this.type === "nukta";
        this.isMatra = ()=>$21fe2fa54792efd1$var$MATRAS.includes(this.value);
        this.isJoiner = ()=>[
                "zwnj",
                "zwj"
            ].includes(this.type);
        this.isWhitespace = ()=>this.type === "whitespace";
        this.isUnrecognised = ()=>this.type === "unrecognised";
        this.isEndOfInput = ()=>this.type === "end_of_input";
        this.isVowelAttachment = ()=>this.isVowelMark() || this.isAccent();
        this.isConsonantAttachment = ()=>this.isVirama() || this.isYogavaha() || this.isAccent() || this.isVowelMark() || this.isMatra();
        this.isVowelMarkAttachment = ()=>this.isYogavaha() || this.isAccent() || this.isMatra();
        this.value = value;
        this.type = this.#getCharType(value);
    }
    #getCharType;
}



var $66d137fe0087513e$export$f435f793048e7a0f;
(function(TokenType) {
    TokenType["Akshara"] = "akshara";
    TokenType["Symbol"] = "symbol";
    TokenType["Whitespace"] = "whitespace";
    TokenType["Invalid"] = "invalid";
    TokenType["Unrecognised"] = "unrecognised";
})($66d137fe0087513e$export$f435f793048e7a0f || ($66d137fe0087513e$export$f435f793048e7a0f = {}));
class $66d137fe0087513e$export$50792b0e93539fde {
    constructor(type, value, pos, attributes){
        this.type = type;
        this.value = value;
        this.from = pos;
        this.to = pos + (value.length - 1);
        this.attributes = attributes;
    }
}


var $1a6233e1cbefb8e5$export$43f5c03b889fb331;
(function(VarnaType) {
    VarnaType["Svara"] = "svara";
    VarnaType["Vyanjana"] = "vyanjana";
})($1a6233e1cbefb8e5$export$43f5c03b889fb331 || ($1a6233e1cbefb8e5$export$43f5c03b889fb331 = {}));
const $1a6233e1cbefb8e5$export$9aabccd6c029d20f = {
    Virama: "\u25CC\u0BCD",
    InherentA: "\u0B85",
    Om: [
        "\u0B93",
        "\u0BAE\u0BCD"
    ]
};
class $1a6233e1cbefb8e5$export$9a9b914922c5814b {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}


var $b4bfbd25bd11531b$var$State;
(function(State) {
    State[State["Initial"] = 0] = "Initial";
    State[State["Vowel"] = 1] = "Vowel";
    State[State["Consonant"] = 2] = "Consonant";
    State[State["ConjunctConsonant"] = 3] = "ConjunctConsonant";
})($b4bfbd25bd11531b$var$State || ($b4bfbd25bd11531b$var$State = {}));
const $b4bfbd25bd11531b$export$660b2ee2d4fb4eff = (input)=>{
    const tokens = [];
    let pos = 0;
    let acc = "";
    let svaraAcc = "";
    let vyanjanaAcc = "";
    let varnas = [];
    let state = 0;
    const resetVariables = ()=>{
        pos = 0;
        acc = "";
        svaraAcc = "";
        vyanjanaAcc = "";
        varnas = [];
        state = 0;
    };
    const createToken = (tokenType, attributes)=>{
        tokens.push(new (0, $66d137fe0087513e$export$50792b0e93539fde)(tokenType, acc, pos, attributes));
        resetVariables();
    };
    for(let i = 0, l = input.length; i < l; i += 1){
        const char = new (0, $21fe2fa54792efd1$export$3ae2e3e9a9c21123)(input[i]);
        const nextChar = new (0, $21fe2fa54792efd1$export$3ae2e3e9a9c21123)(input[i + 1]);
        acc += char.value;
        switch(state){
            case 0:
                pos = i;
                if (char.isOm()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Om[0]),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Om[1])
                        ])
                    });
                    break;
                }
                if (char.isSymbol()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Symbol);
                    break;
                }
                if (char.isWhitespace()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Whitespace);
                    break;
                }
                if (char.isUnrecognised()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Unrecognised);
                    break;
                }
                if (char.isVowel()) {
                    if (nextChar.isVowelAttachment()) {
                        state = 1;
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, acc)
                        ])
                    });
                    break;
                }
                if (char.isConsonant()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                        state = 2;
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA)
                        ])
                    });
                    break;
                }
                createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Invalid);
                break;
            case 1:
                if (char.isAccent()) {
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, acc)
                        ])
                    });
                    break;
                }
                if (char.isYogavaha()) {
                    if (nextChar.isAccent()) break;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, acc)
                        ])
                    });
                    break;
                }
                break;
            case 2:
                if (char.isNukta()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isConsonantAttachment()) break;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA)
                        ])
                    });
                    break;
                }
                if (char.isVirama()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        varnas = varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ]);
                        state = 3;
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ])
                    });
                    break;
                }
                if (char.isJoiner()) {
                    vyanjanaAcc += char.value;
                    if (nextChar.isJoiner()) break;
                    if (nextChar.isConsonant()) {
                        varnas = varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ]);
                        state = 3;
                        break;
                    }
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc)
                        ])
                    });
                    break;
                }
                if (char.isVowelMarkAttachment()) {
                    svaraAcc = (svaraAcc || (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA) + char.value;
                    if (nextChar.isAccent()) break;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, svaraAcc)
                        ])
                    });
                    break;
                }
                if (char.isVowelMark()) {
                    svaraAcc = (0, $fab42eb3dee39b5b$export$a93666e9003b61ba)(char.value);
                    if (nextChar.isVowelMarkAttachment()) break;
                    createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                        varnas: varnas.concat([
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                            new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, svaraAcc)
                        ])
                    });
                    break;
                }
            case 3:
                vyanjanaAcc = char.value;
                if (nextChar.isNukta() || nextChar.isConsonantAttachment()) {
                    state = 2;
                    break;
                }
                createToken((0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara, {
                    varnas: varnas.concat([
                        new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Vyanjana, vyanjanaAcc + (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).Virama),
                        new (0, $1a6233e1cbefb8e5$export$9a9b914922c5814b)((0, $1a6233e1cbefb8e5$export$43f5c03b889fb331).Svara, (0, $1a6233e1cbefb8e5$export$9aabccd6c029d20f).InherentA)
                    ])
                });
                break;
            default:
                break;
        }
    }
    return tokens;
};




const $149c1bd638913645$var$analyse = (input)=>{
    const tokens = (0, $b4bfbd25bd11531b$export$660b2ee2d4fb4eff)(input);
    const aksharas = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Akshara);
    const varnas = $fab42eb3dee39b5b$export$829ee63b3dace6ab(aksharas);
    const chars = input.split("");
    const symbols = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Symbol);
    const invalidChars = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Invalid);
    const whitespaces = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Whitespace);
    const unrecognisedChars = $fab42eb3dee39b5b$export$99699e6242229250(tokens, (0, $66d137fe0087513e$export$f435f793048e7a0f).Unrecognised);
    return {
        all: tokens,
        aksharas: aksharas,
        varnas: varnas,
        chars: chars,
        symbols: symbols,
        invalid: invalidChars,
        whitespaces: whitespaces,
        unrecognised: unrecognisedChars
    };
};
const $149c1bd638913645$var$Aksharas = {
    analyse: $149c1bd638913645$var$analyse,
    TokenType: $66d137fe0087513e$export$f435f793048e7a0f,
    VarnaType: $1a6233e1cbefb8e5$export$43f5c03b889fb331
};
var $149c1bd638913645$export$2e2bcd8739ae039 = $149c1bd638913645$var$Aksharas;


export {$149c1bd638913645$export$2e2bcd8739ae039 as default, $66d137fe0087513e$export$f435f793048e7a0f as TokenType, $1a6233e1cbefb8e5$export$43f5c03b889fb331 as VarnaType};
//# sourceMappingURL=index.mjs.map
