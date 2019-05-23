function solve() {
    let buttonElement = document.getElementById('searchBtn');
    let searchFieldElement = document.getElementById('searchField');
    let resultRows = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let rowsToClear = [];

    buttonElement.addEventListener('click', () => {
        for (let row of rowsToClear) {
            row.classList.remove('select');
        }

        rowsToClear.length = 0;
        let searchedWord = searchFieldElement.value.toLowerCase();

        if (searchedWord) {
            for (let i = 0; i < resultRows.length; i++) {
                let rowContent = '';

                for (let j = 0; j < 3; j++) {
                    rowContent += resultRows[i].getElementsByTagName('td')[j].textContent;
                }

                if (rowContent.toLowerCase().includes(searchedWord)) {
                    resultRows[i].setAttribute('class', 'select');
                    rowsToClear.push(resultRows[i]);
                }
            }

            searchFieldElement.value = '';
        }
    });
}


/*

OTHER SOLUTION , BUT JUDGE ONLY GIVE 16/100 POINTS

function solve() {
    let search = document.getElementById('searchField');
    let button = document.getElementById('searchBtn');
    let selected = document.getElementsByClassName('select');

    let rowsWIthInformation = document.querySelectorAll('tbody td');

    button.addEventListener('click', doSearch);

    function doSearch() {
        for (let information of rowsWIthInformation) {
            information.parentNode.className = '';
        }

        for (let row of selected) {
            row.classList.remove('select');

        }

        if (search.value.length > 0) {
            for (let i = 0; i < rowsWIthInformation.length; i++) {
                if (rowsWIthInformation[i].textContent.toLowerCase().includes(search.value.toLowerCase()) === true) {
                    rowsWIthInformation[i].parentNode.className = 'select';
                }
            }
            search.value = '';
        }
    }
}
 */