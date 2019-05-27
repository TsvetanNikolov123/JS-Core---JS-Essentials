function solution(array) {
    let result = [];
    let counter = 0;

    for (const arrayElement of array) {
        if (arrayElement === 'add') {
            counter++;
            result.push(counter);
        } else if (arrayElement === 'remove') {
            counter++;
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log('Empty')
    } else {
        result.forEach((e) => console.log(e))
    }
}

solution([
    'add',
    'add',
    'remove',
    'add',
    'add']
);
