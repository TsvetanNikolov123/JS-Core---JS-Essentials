function solve() {
    let convertButton = document.getElementsByTagName('button')[0];

    let convertToSelectMenu = document.getElementById('selectMenuTo');

    let opt = document.createElement('option');
    let opt1 = document.createElement('option');

    opt.appendChild(document.createTextNode('Binary'));
    opt1.appendChild(document.createTextNode('Hexadecimal'));

    opt.value = 'binary';
    opt1.value = 'hexadecimal';

    convertToSelectMenu.appendChild(opt);
    convertToSelectMenu.appendChild(opt1);

    convertButton.addEventListener('click', function () {
        let inputNumber = Number(document.getElementById('input').value);
        let selectedConversion = document.getElementById('selectMenuTo').value;

        if (selectedConversion === 'binary') {
            let toBinary = inputNumber.toString(2);
            document.getElementById('result').value = toBinary;
        } else if (selectedConversion === 'hexadecimal') {
            let toHex = inputNumber.toString(16);
            document.getElementById('result').value = toHex.toUpperCase();
            console.log(toHex);
        }
    })
}