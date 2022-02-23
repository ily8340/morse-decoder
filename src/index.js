const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseS = '',
        morseR ='';
    for (let i = 0; i < expr.length; i += 10){
        morseS = expr.slice(i, i + 10);
        if (morseS == "*".repeat(10)) {
            morseR += ' ';
            continue;
        }
        let result = '',
            morseWord = '';
        for(let k = 0; k<morseS.length; k += 2){
            morseWord = morseS.slice(k, k + 2);
            if(morseWord == '10') {
                result += '.';
            }
            if(morseWord == "11") {
                result += '-';
            }
        }
        morseR += MORSE_TABLE[result];
    }
    return morseR;
}

module.exports = {
    decode
};
