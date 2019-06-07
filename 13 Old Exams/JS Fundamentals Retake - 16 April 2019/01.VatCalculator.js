function solution(num1, num2) {
    let priceWithVat = num1;
    let vat = num2;

    return (priceWithVat / ((vat / 100) + 1)).toFixed(2);
}

console.log(solution([120.00, 20.00]));