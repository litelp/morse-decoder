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
    let start = 0;
    let end = 2;
    let resultMors = [[]];
    let result = [];
    let i = 0;
    while (end <= expr.length) {
        if (expr.slice(start,end) == '10') {
            resultMors[i].push('.');
            start += 2;
            end += 2;
        } else if (expr.slice(start,end) == '11') {
            resultMors[i].push('-');
            start += 2;
            end += 2;
        } else if (expr.slice(start,end) == '**') {

            resultMors[i].push(' ');
            start += 10;
            end += 10;
        } else if (expr.slice(start,end) == '00') {
            while (expr.slice(start,end) == '00') {
                start += 2;
                end += 2;
            }

        }
        i = Math.floor(start / 10);
        if (resultMors[i] == undefined) resultMors[i] = [];

    }

    resultMors.forEach(element => {
        if (element.join('') in MORSE_TABLE) {
            result.push(MORSE_TABLE[element.join('')]);
        } else if (element == ' ') {
            result.push(' ');
        }

    })

    return result.join('');
}

module.exports = {
    decode
}