function solution(input) {
    const english = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        ',', '.', '?', ' '
    ];

    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
        ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
        "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
        "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
        "-----", "--..--", ".-.-.-", "..--..", "......."];

    const inputTokens = input.split(' ').filter((a) => a !== '');

    let str = '';
    for (let i = 0; i < inputTokens.length; i++) {
        let indexOfMorse = morse.indexOf(inputTokens[i]);
        str += english[indexOfMorse];
    }

    return str;
}

console.log(solution('--. --- --- --. .-.. .'));