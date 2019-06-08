function solution(input) {
    let listOfInstructions = [];
    let addedParts = {};

    function addPart(model, [part, serialNumber]) {
        addedParts[model] = addedParts[model] || {};
        addedParts[model][part] = addedParts[model][part] || [];
        addedParts[model][part].push(serialNumber);
    }

    function repair(model, [carSpecifications]) {
        if (!listOfInstructions.includes(model)) {
            console.log(`${model} is not supported`);
        } else {
            carSpecifications = JSON.parse(carSpecifications);
            Object.entries(carSpecifications)
                .filter(part => part[1] === 'broken')
                .forEach(part => {
                    if (addedParts[model] && addedParts[model][part[0]]) {
                        carSpecifications[part[0]] = addedParts[model][part[0]].shift();
                    }
                });

            console.log(`${model} client - ${JSON.stringify(carSpecifications)}`);
        }
    }

    for (const inputElement of input) {
        let [command, model, ...args] = inputElement.split(' ').filter((a) => a !== ' ');

        switch (command) {
            case 'instructions':
                listOfInstructions.push(model);
                break;
            case 'addPart':
                addPart(model, args);
                break;
            case 'repair':
                repair(model, args);
                break;
        }
    }

    Object.entries(addedParts)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(part => {
            console.log(`${part[0]} - ${JSON.stringify(part[1])}`);
        });
}

// solution([
//     'repair mazda {"engine":"broken"}',
//     'instructions bmw',
//     'addPart opel engine GV1399SSS'
// ]);

solution([
    'instructions bmw',
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
]);