function solution(array) {
    let delimiter = array[array.length - 1];
    array.pop();

    return array.join(delimiter);
}

console.log(solution([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
));