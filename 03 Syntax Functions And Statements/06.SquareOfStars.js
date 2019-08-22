function solution(inputNumber) {

    let result = '';

    if (inputNumber === undefined) {
        inputNumber = 5;
    }

    for (let row = 0; row < inputNumber; row++) {
        for (let col = 0; col < inputNumber; col++) {
            result += '* ';
        }
        result += '\n';
    }

    console.log(result);
}

solution(4);