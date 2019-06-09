function spaceshipCrafting() {
    const titaniumBar = 25; // cores
    const aluminiumBar = 50; //cores
    const magnesiumBar = 75; //cores
    const carbonBar = 100; // cores

    let availableBarsField = document.querySelector('#availableBars p');
    let builtSpaceshipsField = document.querySelector('#builtSpaceships p');

    let titaniumCores = document.getElementById('titaniumCoreFound').value;
    let aluminiumCores = document.getElementById('aluminiumCoreFound').value;
    let magnesiumCores = document.getElementById('magnesiumCoreFound').value;
    let carbonCores = document.getElementById('carbonCoreFound').value;
    let percent = document.getElementById('lossesPercent').value / 4;
    let lossesPercent = percent / 100;

    let titaniumBARS = Math.round((titaniumCores - (titaniumCores * lossesPercent)) / titaniumBar);
    let aluminumBARS = Math.round((aluminiumCores - (aluminiumCores * lossesPercent)) / aluminiumBar);
    let magnesiumBARS = Math.round((magnesiumCores - (magnesiumCores * lossesPercent)) / magnesiumBar);
    let carbonBARS = Math.round((carbonCores - (carbonCores * lossesPercent)) / carbonBar);

    let createdShips = {};

    while (true) {
        if (titaniumBARS >= 7 && aluminumBARS >= 9 && magnesiumBARS >= 7 && carbonBARS >= 7) {
            // The-Undefined-Ship
            if (!createdShips.hasOwnProperty('THE-UNDEFINED-SHIP')) {
                createdShips['THE-UNDEFINED-SHIP'] = 0;
            }
            createdShips['THE-UNDEFINED-SHIP']++;

            titaniumBARS -= 7;
            aluminumBARS -= 9;
            magnesiumBARS -= 7;
            carbonBARS -= 7;

        }

        if (titaniumBARS >= 5 && aluminumBARS >= 7 && magnesiumBARS >= 7 && carbonBARS >= 5) {
            // Null-Master
            if (!createdShips.hasOwnProperty('NULL-MASTER')) {
                createdShips['NULL-MASTER'] = 0;
            }
            createdShips['NULL-MASTER']++;

            titaniumBARS -= 5;
            aluminumBARS -= 7;
            magnesiumBARS -= 7;
            carbonBARS -= 5;
        }

        if (titaniumBARS >= 3 && aluminumBARS >= 5 && magnesiumBARS >= 5 && carbonBARS >= 2) {
            // JSON-CREW
            if (!createdShips.hasOwnProperty('JSON-CREW')) {
                createdShips['JSON-CREW'] = 0;
            }
            createdShips['JSON-CREW']++;

            titaniumBARS -= 3;
            aluminumBARS -= 5;
            magnesiumBARS -= 5;
            carbonBARS -= 2;
        }

        if (titaniumBARS >= 2 && aluminumBARS >= 2 && magnesiumBARS >= 3 && carbonBARS >= 1) {
            // False-Fleet
            if (!createdShips.hasOwnProperty('FALSE-FLEET')) {
                createdShips['FALSE-FLEET'] = 0;
            }
            createdShips['FALSE-FLEET']++;

            titaniumBARS -= 2;
            aluminumBARS -= 2;
            magnesiumBARS -= 3;
            carbonBARS -= 1;
        }else {
            break;
        }
    }

    availableBarsField.innerHTML = `${titaniumBARS} titanium bars, ${aluminumBARS} aluminum bars, ${magnesiumBARS} magnesium bars, ${carbonBARS} carbon bars`;

    let result = [];
    for (let kvp in createdShips) {
        let ship = kvp;
        let count = createdShips[kvp];
        result.push(`${count} ${ship}`);
    }

    builtSpaceshipsField.innerHTML = result.join(', ');
}