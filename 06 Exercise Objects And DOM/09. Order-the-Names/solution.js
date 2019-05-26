function solve() {
    let buttonElement = document.getElementsByTagName('button')[0];
    let inputElement = document.getElementsByTagName('input')[0];
    let listOfLiElements = document.getElementsByTagName('li');

    buttonElement.addEventListener('click', () => {
        let inputText = inputElement.value;
        let name = inputText[0].toUpperCase() + inputText.slice(1).toLowerCase();
        let index = name[0].charCodeAt(0) - 65;

        if (listOfLiElements[index].textContent) {
            listOfLiElements[index].textContent += ', ' + name;
        } else {
            listOfLiElements[index].textContent = name;
        }

        inputElement.value = '';
    })
}
