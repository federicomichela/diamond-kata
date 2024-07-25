import { describe, it, expect } from 'vitest';
import { buildDiamond, getLettersBefore, matrixToStr } from "./utils";

describe("getLettersBefore", () => {
    it('raises an exception if a string with more than one character is passed', () => {
        const letter = 'any'

        expect(() => getLettersBefore(letter))
            .toThrow(`Invalid letter "${letter}". Parameter must be one character only.`)
    })

    it('raises an exception if anything outside [a-z | A-Z] is passed', () => {
        const letter = '!';

        expect(() => getLettersBefore(letter))
            .toThrow(`Invalid letter "${letter}". Parameter must be one character between [a-Z].`)
    })

    it('should return all letters between "a" and specified letter', () => {
        expect(getLettersBefore('a'))
            .toMatchObject(['a'])
        expect(getLettersBefore('b'))
            .toMatchObject(['a', 'b'])
        expect(getLettersBefore('c'))
            .toMatchObject(['a', 'b', 'c'])
        expect(getLettersBefore('d'))
            .toMatchObject(['a', 'b', 'c', 'd'])
        expect(getLettersBefore('e'))
            .toMatchObject(['a', 'b', 'c', 'd', 'e'])
        expect(getLettersBefore('F'))
            .toMatchObject(['A', 'B', 'C', 'D', 'E', 'F'])
        expect(getLettersBefore('Z'))
            .toMatchObject([ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ])
    })
})

describe("buildDiamond", () => {
    it('raises an exception if a string with more than one character is passed', () => {
        const letter = 'any'

        expect(() => buildDiamond(letter))
            .toThrow(`Invalid letter "${letter}". Parameter must be one character only.`)
    })

    it('raises an exception if anything outside [a-z | A-Z] is passed', () => {
        const letter = '!';

        expect(() => buildDiamond(letter))
            .toThrow(`Invalid letter "${letter}". Parameter must be one character between [a-Z].`)
    })

    it('should return defined matrix for "a"', () => {
        const expected = [['a']]
        const received = buildDiamond('a')

        expect(received).toMatchObject(expected)
    })

    it('should return defined matrix for "b"', () => {
        const expected = [
            [' ','a',' '],
            ['b',' ','b'],
            [' ','a',' ']
        ]
        const received = buildDiamond('b')

        console.log(received)
        expect(received).toMatchObject(expected)
    })

    it('should return defined matrix for "c"', () => {
        const expected = [
            [' ',' ','a',' ',' '],
            [' ','b',' ','b',' '],
            ['c',' ',' ',' ','c'],
            [' ','b',' ','b',' '],
            [' ',' ','a',' ',' '],
        ]
        const received = buildDiamond('c')

        expect(received).toMatchObject(expected)
    })

    it('should return defined matrix for "d"', () => {
        const expected = [
            [' ',' ',' ','a',' ',' ',' '],
            [' ',' ','b',' ','b',' ',' '],
            [' ','c',' ',' ',' ','c',' '],
            ['d',' ',' ',' ',' ',' ','d'],
            [' ','c',' ',' ',' ','c',' '],
            [' ',' ','b',' ','b',' ',' '],
            [' ',' ',' ','a',' ',' ',' '],
        ]
        const received = buildDiamond('d')

        expect(received).toMatchObject(expected)
    })
})

describe('matrixToStr', () => {
    it('should return defined matrix for "a"', () => {
        const expected = 'a'
        const received = matrixToStr(buildDiamond('a'))

        expect(received).toMatch(expected)
    })

    it('should return defined matrix for "b"', () => {
        const expected = "" +
            " a \n" +
            "b b\n" +
            " a \n"
        const received = matrixToStr(buildDiamond('b'))

        console.log(received)
        expect(received).toMatch(expected)
    })

    it('should return defined matrix for "c"', () => {
        const expected = "" +
            "  a  \n" +
            " b b \n" +
            "c   c\n" +
            " b b \n" +
            "  a  \n"
        const received = matrixToStr(buildDiamond('c'))

        expect(received).toMatch(expected)
    })

    it('should return defined matrix for "d"', () => {
        const expected = "" +
            "   a   \n" +
            "  b b  \n" +
            " c   c \n" +
            "d     d\n" +
            " c   c \n" +
            "  b b  \n" +
            "   a   \n"
        const received = matrixToStr(buildDiamond('d'))

        expect(received).toMatch(expected)
    })
});