/**
 * very tnx to yotkoKanchev for this solution!!!
 */

function solve() {
    let correctAnswersArray = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let correctAnswersCount = 0;

    let sectionElements = document.getElementsByTagName('section');

    for (let i = 0; i < sectionElements.length; i++) {
        let currentSection = sectionElements[i];
        let optionElements = currentSection.getElementsByTagName('p');

        for (let optionElement of optionElements) {
            optionElement.addEventListener('click', (a) => {
                let currentAnswerElement = a.currentTarget;
                let currentAnswer = currentAnswerElement.textContent;

                if (correctAnswersArray.includes(currentAnswer)) {
                    correctAnswersCount++;
                }

                currentSection.style.display = 'none';

                if (i < correctAnswersArray.length - 1) {
                    sectionElements[i + 1].style.display = "block";
                } else {
                    let resultUl = document.getElementById('results');
                    resultUl.style.display = 'block';
                    let resultElement = resultUl.getElementsByTagName('h1')[0];

                    resultElement.textContent = correctAnswersCount === 3
                        ? 'You are recognized as top JavaScript fan!'
                        : `You have ${correctAnswersCount} right answers`;
                }
            });
        }
    }
}
