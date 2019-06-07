function solution(firstMatrix, secondMatrix) {
    let result = [];
    let tempNumber = 0;

    for (let row = 0; row < firstMatrix.length; row++) {
        let newRow = [];

        for (let col = 0; col < firstMatrix[row].length; col++) {
            let sumOfCurrentCells = tempNumber + firstMatrix[row][col] + secondMatrix[row][col];
            tempNumber = 0;

            if (sumOfCurrentCells > 9) {
                newRow.push(9);
                tempNumber = sumOfCurrentCells - 9;

                if (col === firstMatrix[row].length - 1) {
                    while (tempNumber > 0) {
                        newRow.push(tempNumber <= 9 ? tempNumber : 9);
                        tempNumber -= 9;
                    }
                    tempNumber = 0;
                }
            } else {
                newRow.push(sumOfCurrentCells);
                if (col === firstMatrix[row].length - 1) {
                    while (tempNumber > 0) {
                        newRow.push(tempNumber <= 9 ? tempNumber : 9);
                        tempNumber -= 9;
                    }
                    tempNumber = 0;
                }
            }
        }

        result.push(newRow);
    }

    return JSON.stringify(result);
}

console.log(solution(
    [[1, 2, 3], [3, 4, 5], [5, 6, 7]],
    [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
));

console.log(solution(
    [[9, 2, 3], [4, 5, 6], [7, 8, 8]],
    [[1, 1, 1], [1, 1, 1], [1, 1, 1]]
));

console.log(solution(
    [[9, 9], [4, 7]],
    [[7, 1], [1, 2]]
));

console.log(solution(
    [[9, 9], [4, 9]],
    [[9, 9], [1, 2]]
));