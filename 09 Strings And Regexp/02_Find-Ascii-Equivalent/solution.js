function solve() {
    const text = document.querySelector('#text').value;
    const output = document.getElementById("result");
    const parts = text.split(' ');
    let numbers = '';

    parts.forEach(part => {
        if (isNaN(+part)) {
            let words = '';

            words += [...part]
                .map(ch => ch.charCodeAt(0))
                .join(' ');

            let p = document.createElement('p');
            p.innerHTML = words;
            output.appendChild(p);
        } else {
            numbers += String.fromCharCode(+part);
        }
    });

    let p = document.createElement('p');
    p.innerHTML = numbers;
    output.appendChild(p);
}