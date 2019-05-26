function solution(array) {
    let k = array.shift();

    console.log(array.slice(0, k).join(' '));
    console.log(array.slice(array.length - k, array.length).join(' '));
}

solution([2, 7, 8, 9]);
// solution([3, 6, 7, 8, 9]);