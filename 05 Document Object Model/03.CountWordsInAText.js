function solution([input]) {
    let words = {};
    let regex = /\W+/;

    let tokens = input.split(regex).filter(s => s !== '');
    for (let word of tokens) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }
        words[word] += 1;
    }

    return JSON.stringify(words);
}

console.log(solution(["Far too slow, you're far too slow."]));
// console.log(solution("JS devs use Node.js for server-side JS.-- JS for devs"));