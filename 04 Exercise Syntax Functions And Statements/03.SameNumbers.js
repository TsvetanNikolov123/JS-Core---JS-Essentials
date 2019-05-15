function solution(number) {
    function isDigitsTheSame(number) {
        let numberAsString = number.toString();
        for (let i = 0; i < numberAsString.length; i++) {
            for (let j = i + 1; j < numberAsString.length; j++) {
                if (numberAsString[i] !== numberAsString[j]) {
                    return false;
                }
            }
        }
        return true;
    }

    function sumOfAllDigits(numbers) {
        let numberAsString = numbers.toString();
        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
        }
        return sum;
    }

    console.log(isDigitsTheSame(number));
    console.log(sumOfAllDigits(number));
}


solution(2222222);
solution(1234);