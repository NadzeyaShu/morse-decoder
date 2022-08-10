const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = "";
    let numberSymbArray = splitStr(expr, 10);

    numberSymbArray.forEach((letterSymb) => {
        if (letterSymb === "**********") {
            result = result + " ";
        } else {
            let preMorzSymbArr = splitStr(letterSymb, 2); // 00 10 11 00 11

            let morzSymb = preMorzSymbArr
                .map((symb) => decodePreMorzSymb(symb))
                .join("");

            let letter = MORSE_TABLE[morzSymb]; //x
            result = result + letter;
        }
    });

    return result;
}

function splitStr(str, stepSize) {
    let result = [];

    for (let i = 0; i < str.length; i += stepSize) {
        let step = str.slice(i, i + stepSize);
        result.push(step);
    }
    return result;
}

function decodePreMorzSymb(symb) {
    // 10
    let result = ""; //. -

    if (symb === "10") {
        result = ".";
    } else if (symb === "11") {
        result = "-";
    }
    return result;
}

module.exports = {
    decode
}