import {buildDiamond, getLettersBefore, matrixToStr} from "./utils";

function initLettersDiamond(): HTMLElement {
    destroyLettersDiamond()

    const containerEl = document.createElement('div')
    const diamondShape = document.createElement('div')

    containerEl.className = 'diamond-container'
    diamondShape.className = 'diamond-shape'

    containerEl.appendChild(diamondShape)
    document.querySelector('main')?.appendChild(containerEl)

    return containerEl;
}

function destroyLettersDiamond() {
    let mainEl: HTMLElement | null = document.querySelector('main')
    let diamondContainerEl: HTMLElement | null | undefined = mainEl?.querySelector('.diamond-container')

    if (!mainEl || !diamondContainerEl) return

    mainEl.removeChild(diamondContainerEl)
}

function selectLetterBtn(letterBtnEl: HTMLElement) {
    document
        .querySelectorAll('.letter-btn--selected')
        .forEach((btn) => deselectLetterBtn(btn as HTMLElement))

    letterBtnEl.classList.add('letter-btn--selected')
}

function deselectLetterBtn(letterBtnEl: HTMLElement) {
    letterBtnEl.classList.remove('letter-btn--selected')
}

function generateDiamond(letter: string) {
    const matrix = buildDiamond(letter)

    // !!EASTER EGG!! copy to clipboard
    navigator.clipboard.writeText(matrixToStr(matrix)).then(() => {
        // TODO: show message
    })

    // attach new table
    const containerEl: HTMLElement = initLettersDiamond()
    const table = document.createElement('table')

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
        letterEl.addEventListener('click', (event: UIEvent) => {
            if (!event || !event.target) return;

            const letterBtn = event.target as HTMLElement
            const isLetterBtnSelected = letterBtn.classList.contains('letter-btn--selected')
            const letter: string | null = letterBtn.getAttribute('data-value')

            if (!letter) return;

            if (isLetterBtnSelected) {
                deselectLetterBtn(letterBtn)
            } else {
                selectLetterBtn(letterBtn)
                generateDiamond(letter)
            }
        })

        containerEl.appendChild(letterEl)
    })
}

const letterContainers: NodeListOf<HTMLElement> = document.querySelectorAll('.letters-container');
initLettersPicker(letterContainers[0])
initLettersPicker(letterContainers[1], true)