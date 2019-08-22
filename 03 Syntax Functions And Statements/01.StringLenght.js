function solution(firstString, secondString, thirdString) {

    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;

    let sumOfStringsLength = firstStringLength + secondStringLength + thirdStringLength;
    let averageOfStringLengthsSum = Math.round(sumOfStringsLength / 3);

    console.log(sumOfStringsLength);
    console.log(averageOfStringLengthsSum);
}

solution('chocolate', 'ice cream', 'cake');
solution('pasta', '5', '22.3');