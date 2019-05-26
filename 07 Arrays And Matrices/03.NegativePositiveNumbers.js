function solution(array) {
    let newArray = [];

    for (const arrayElement of array) {
        if (arrayElement >= 0) {
            newArray.push(arrayElement);
        } else {
            newArray.unshift(arrayElement);
        }
    }

    newArray.forEach((e) => console.log(e));
}

solution(['7', '-2', '8', '9']);