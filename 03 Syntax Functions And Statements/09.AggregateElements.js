function solution(elements) {

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(array, initValue, func) {
        let value = initValue;

        for (let i = 0; i < array.length; i++) {
            value = func(value, array[i]);
        }

        console.log(value);
    }
}

solution([1, 2, 3]);