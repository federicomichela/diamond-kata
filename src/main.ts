import {buildDiamond, getLettersBefore, matrixToStr} from "./utils";

function generateDiamond(event: MouseEvent) {
    const letterBtn: HTMLElement = event.target as HTMLElement
    const letter: string | null = letterBtn?.getAttribute("data-value")

    if (!letterBtn || !letter) {
        throw new Error('Unable to identify selected letter')
    }

    const matrix = buildDiamond(letter)

    // !!EASTER EGG!! copy to clipboard
    navigator.clipboard.writeText(matrixToStr(matrix)).then(r => {
        letterBtn.addEventListener('transitionend', () => {
            letterBtn.classList.remove('letter-btn--copied');
        }, { once: true });

        letterBtn.classList.add('letter-btn--copied')
    })

    let containerEl = document.querySelector('.diamond-container')
    const table = document.createElement('table')

    if (!containerEl) {
        containerEl = document.createElement('div')
        containerEl.className = 'diamond-container'
        document.appendChild(containerEl)
    }

    // reset container content
    containerEl.innerHTML = ''
    // attach new table
    containerEl.appendChild(table)

    // Loop through the rows of the matrix
    matrix.forEach(row => {
        // Create a table row
        const tr = document.createElement('tr')

        // Loop through the columns of the current row
        row.forEach(letter => {
            const td = document.createElement('td')
            const div = document.createElement('div')

            div.className = 'diamond-letter'
            div.textContent = letter

            td.appendChild(div)
            tr.appendChild(td)
        });

        table.appendChild(tr); // Append the row to the table
    });
}

function initLettersPicker(containerEl: HTMLElement, upperCase: boolean = false) {
    const letters: string[] = getLettersBefore(upperCase ? 'Z' : 'z');

    let letterEl;
    letters.forEach(letter => {
        letterEl = document.createElement('button') as HTMLButtonElement
        letterEl.classList.add('letter-btn')
        letterEl.setAttribute('data-value', letter)
        letterEl.textContent = letter
        letterEl.addEventListener('click', generateDiamond)

        containerEl.appendChild(letterEl)
    })
}

const letterContainers: NodeListOf<HTMLElement> = document.querySelectorAll('.letters-container');
initLettersPicker(letterContainers[0])
initLettersPicker(letterContainers[1], true)