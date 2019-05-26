function solve() {
    let allButtons = document.getElementsByTagName('button');
    let expressionOutputField = document.getElementById('expressionOutput');
    let resultOutputField = document.getElementById('resultOutput');

    let firstClickedNumber = '';
    let secondClickedNumber = '';
    let clickedOperator;

    Array.from(allButtons).forEach((button) => {
        button.addEventListener('click', (event) => {
                resultOutputField.textContent = '';
                let clickedButtonValue = event.currentTarget.textContent;

                switch (clickedButtonValue) {
                    case '=':
                        // here is the test № 7
                        if (firstClickedNumber && secondClickedNumber && clickedOperator !== undefined) {
                            switch (clickedOperator) {
                                case'+':
                                    resultOutputField.textContent = (Number(firstClickedNumber) + Number(secondClickedNumber)).toString();
                                    break;
                                case '-':
                                    if (secondClickedNumber[0] === '-') {
                                        resultOutputField.textContent = (Number(firstClickedNumber) + Number(secondClickedNumber)).toString();
                                    } else {
                                        resultOutputField.textContent = (Number(firstClickedNumber) - Number(secondClickedNumber)).toString();
                                    }
                                    break;
                                case 'x':
                                    resultOutputField.textContent = (Number(firstClickedNumber) * Number(secondClickedNumber)).toString();
                                    break;
                                case '/':
                                    resultOutputField.textContent = (firstClickedNumber / secondClickedNumber).toString();
                                    break;
                            }
                        } else {
                            resultOutputField.textContent = 'NaN';
                        }
                        firstClickedNumber = '';
                        secondClickedNumber = '';
                        clickedOperator = '';
                        break;
                    case 'C':
                        expressionOutputField.textContent = '';
                        resultOutputField.textContent = '';
                        firstClickedNumber = '';
                        secondClickedNumber = '';
                        clickedOperator = undefined;
                        break;
                    case '/':
                        if (firstClickedNumber !== '' && secondClickedNumber === '' && clickedOperator === undefined) {
                            clickedOperator = '/';
                            expressionOutputField.textContent += ' / ';
                        }
                        break;
                    case 'x':
                        if (firstClickedNumber !== '' && secondClickedNumber === '' && clickedOperator === undefined) {
                            clickedOperator = 'x';
                            expressionOutputField.textContent += ' x ';
                        }
                        break;
                    case '+':
                        if (firstClickedNumber !== '' && secondClickedNumber === '' && clickedOperator === undefined) {
                            clickedOperator = '+';
                            expressionOutputField.textContent += ' + ';
                        }
                        break;
                    case '-':
                        // here is test № 6
                        if (!firstClickedNumber) {
                            firstClickedNumber += '-';
                            expressionOutputField.textContent += '-';
                        } else if (clickedOperator === undefined) {
                            clickedOperator = '-';
                            expressionOutputField.textContent += ' - ';
                        } else if (!secondClickedNumber) {
                            secondClickedNumber += '-';
                            expressionOutputField.textContent += '-';
                        }
                        break;
                    case '.':
                        if (firstClickedNumber && !secondClickedNumber && !firstClickedNumber.includes('.')) {
                            firstClickedNumber += '.';
                            expressionOutputField.textContent += '.';
                        } else if (secondClickedNumber && !secondClickedNumber.includes('.')) {
                            secondClickedNumber += '.';
                            expressionOutputField.textContent += '.';
                        }
                        break;
                    default:
                        expressionOutputField.textContent += clickedButtonValue;
                        if (clickedOperator === undefined ||
                            firstClickedNumber[firstClickedNumber.length - 1] === '.' ||
                            firstClickedNumber === '-') {

                            firstClickedNumber += clickedButtonValue.toString();
                        } else {
                            secondClickedNumber += clickedButtonValue.toString();
                        }
                        break;
                }
            }
        )
    })
}