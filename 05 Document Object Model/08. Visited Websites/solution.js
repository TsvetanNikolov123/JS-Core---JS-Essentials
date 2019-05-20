function solve() {
    let links = document.querySelectorAll('a'),
        result;

    for (let i = 0; i < links.length; i++) {
        result = links[i];
        result["timesClicked"] = Number(result.nextElementSibling.textContent.match(/\d+/)[0]);
        result.addEventListener('click', function () {
            this.timesClicked += 1;
            this.nextElementSibling.textContent = `visited ${this.timesClicked} times`;
        });
    }
}

// Other solution
// function solve() {
//     let siteElements = document.getElementsByClassName('link-1');
//
//     for (const siteElement of siteElements) {
//         siteElement.addEventListener('click', (e) => {
//             let currentTarget = e.currentTarget;
//             let paragraphElement = currentTarget.getElementsByTagName('p')[0];
//
//             let text = paragraphElement.textContent;
//             let textParts = text.split(' ');
//             let clicks = Number(textParts[1]);
//             clicks++;
//             textParts[1] = clicks;
//
//             paragraphElement.textContent = textParts.join(' ');
//         });
//     }
// }