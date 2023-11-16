# Tamil Character Count
![Static Badge](https://img.shields.io/badge/TypeScript-blue)
![Static Badge](https://img.shields.io/badge/MIT_License-dark)


Tamil character count utility for analyzing vowels and consonants in Tamil text.

## Installation

    npm i tamil-characters-count

## Usage

```js
import Aksharas from "tamil-characters-count";

// OR for CommonJS:
// const Aksharas = require("tamil-char-count").default;

const input = "வாழ்க தமிழ்"

const results = Aksharas.analyse(input);

const aksharas = results.aksharas.map(akshara => akshara.value);

console.log(aksharas); // "வா", "ழ்", "க", "த", "மி", "ழ்"
```

## License

MIT © [Arunkumar Selvam](https://github.com/er-arunkumarselvam)

## Acknowledgements

 **Aksharas Module**: [@vipran/aksharas](https://github.com/vipranarayan14/aksharas)


