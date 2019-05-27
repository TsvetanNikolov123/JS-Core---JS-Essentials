function solution(array) {
    return array.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

console.log(solution([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));