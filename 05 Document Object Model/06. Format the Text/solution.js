function solve() {
    let input = document.getElementById('input').textContent;
    let output = document.getElementById('output');

    let textSplit = input.split('.').filter(s => s !== '');

    for (let i = 0; i < textSplit.length; i += 3) {
        let currentParagraph = document.createElement('p');
        currentParagraph.innerHTML = textSplit[i] + '. ';

        if (textSplit.length > i + 1) {
            currentParagraph.textContent += textSplit[i + 1] + '. ';
        }

        if (textSplit.length > i + 2) {
            currentParagraph.textContent += textSplit[i + 2] + '. ';
        }

        output.appendChild(currentParagraph);
    }
}

