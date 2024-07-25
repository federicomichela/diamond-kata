"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpperCase = isUpperCase;
exports.getLettersBefore = getLettersBefore;
exports.buildDiamond = buildDiamond;
exports.matrixToStr = matrixToStr;
function isUpperCase(letter) {
    return /^[A-Z]$/.test(letter);
}
/**
 * Returns list of letters from 'a' to the defined letter
 * @param {string} letter
 * @returns {Array<string>}
 */
function getLettersBefore(letter) {
    if (!letter || letter.length > 1) {
        throw Error(`Invalid letter "${letter}". Parameter must be one character only.`);
    }
    const start = isUpperCase(letter) ? 'A' : 'a';
    const end = isUpperCase(letter) ? 'Z' : 'z';
    const ascii_char_start = start.charCodeAt(0);
    const ascii_char_end = end.charCodeAt(0);
    const ascii_char_letter = letter.charCodeAt(0);
    if (ascii_char_letter < ascii_char_start || ascii_char_letter > ascii_char_end) {
        throw Error(`Invalid letter "${letter}". Parameter must be one character between [a-Z].`);
    }
    const letters = [];
    for (let i = ascii_char_start; i <= ascii_char_letter; i++) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
}
/**
 *
 * @param letter
 */
function buildDiamond(letter) {
    const letters = getLettersBefore(letter);
    const matrixSize = (letters.length * 2) - 1;
    const matrix = new Array(matrixSize).fill([]);
    if (letter === 'a')
        return [['a']];
    // top part of diamond
    let row;
    const middlePoint = matrixSize % 2 === 0 ? Math.ceil(matrixSize / 2) : Math.floor(matrixSize / 2);
    for (let i = 0, j = matrixSize - 1; letters.length > 0; i++, j--) {
        row = new Array(matrixSize).fill(' ');
        row[i] = row[j] = letters.pop();
        matrix[middlePoint - i] = row;
        if (i > 0) {
            matrix[middlePoint + i] = row;
        }
    }
    return matrix;
}
function matrixToStr(matrix) {
    let multiRows = matrix.length > 1;
    let str = matrix.reduce((prev, curr, i) => {
        prev += curr.join('');
        if (multiRows)
            prev += '\n';
        return prev;
    }, '');
    return str;
}
//# sourceMappingURL=main.js.map