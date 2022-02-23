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
    for (let a = 0; a < expr.length; a += 10){
        morseS = expr.slice(a, a + 10);
        if (morseS == "*".repeat(10)) {
            morseR += ' ';
            continue;
        }
        let result = '',
            morseWord = '';
        for(let h = 0; h<morseS.length; h += 2){
            morseWord = morseS.slice(h, h + 2);
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
