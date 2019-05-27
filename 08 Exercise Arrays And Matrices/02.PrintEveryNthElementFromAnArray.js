function solution(array) {
    let nStep = Number(array.pop());

    for (let i = 0; i < array.length; i += nStep) {
        console.log(array[i]);
    }
}

solution(['5', '20', '31', '4', '20', '2']);