import {buildDiamond, getLettersBefore, matrixToStr} from "./utils";

function formatText(text) {
    return text
        .replace(/ /g, '&nbsp;')
        .replace(/\n/g, '<br>')
}

function generateDiamond(event: MouseEvent) {
    const containerEl = document.querySelector('.diamond-container')
    const letter = event.target.getAttribute("data-value")
    const matrix = buildDiamond(letter)

    const table = document.createElement('table')

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

function initLettersPicker(containerEl, upperCase=false) {
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

const letterContainers = document.querySelectorAll('.letters-container');
initLettersPicker(letterContainers[0])
initLettersPicker(letterContainers[1], true)