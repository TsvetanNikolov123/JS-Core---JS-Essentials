function solution(inputArray, cutSize) {
    // cut input array in two equal pieces
    //  1, 2, 3, 4, 5, 6,
    let firstPart = inputArray.slice(0, inputArray.length / 2);
    //  7, 8, 9, 10, 11, 12
    let secondPart = inputArray.slice(inputArray.length / 2);

    // create Giants and get sum of the products at two giants.
    let firstGiantLife = 0;
    let secondGiantLife = 0;

    while (firstPart.length > 0 && secondPart.length > 0) {
        firstGiantLife += firstPart.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiantLife += secondPart.splice(0, cutSize).reduce((a, b) => a * b);
    }

    // FIGHT
    let damagePerHit = Math.min(...inputArray);
    let deadLine = Math.max(...inputArray);
    let rounds = 1;
    let minLife = Math.min(firstGiantLife, secondGiantLife);
    let pointsToDead = minLife - deadLine;

    // do we need this check ?
    if (pointsToDead <= damagePerHit) {
        let hitsCounter = 1;
        if (pointsToDead % damagePerHit === 0) {
            hitsCounter = pointsToDead / damagePerHit;
        } else {
            hitsCounter = Math.ceil(pointsToDead / damagePerHit);
        }
    }

    if (damagePerHit !== 0) {
        while (firstGiantLife > deadLine && secondGiantLife > deadLine) {
            firstGiantLife -= damagePerHit;
            secondGiantLife -= damagePerHit;
            rounds++;
        }
    }
    //  print the result
    if (firstGiantLife === secondGiantLife) {
        console.log(`Its a draw ${firstGiantLife} - ${secondGiantLife}`);
    } else if (firstGiantLife > secondGiantLife) {
        console.log(`First Giant defeated Second Giant with result ${firstGiantLife} - ${secondGiantLife} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondGiantLife} - ${firstGiantLife} in ${rounds} rounds`);
    }
}

// solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3);
// solution([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);
solution([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);