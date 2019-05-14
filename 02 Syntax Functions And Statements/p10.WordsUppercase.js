// solution with regex

function solution(text) {
    let regex = /\w+/g;
    let textToUpperCase = text.toUpperCase();
    let strArr = textToUpperCase.match(regex);

    console.log(strArr.join(', '));
}

solution('Hi, how are you?');
solution('hello');