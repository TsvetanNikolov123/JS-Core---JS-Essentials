function solution(input) {
    let incomeMoney = 0;

    for (let inputElement of input) {
        let orderElements = inputElement.split(', ');
        let insertedCoins = +orderElements[0];
        let drinkType = orderElements[1];
        let drinkPrice = 0;

        switch (drinkType) {
            case 'coffee':
                if (orderElements[2] === 'caffeine') {
                    drinkPrice += 0.80;
                } else {
                    drinkPrice += 0.90;
                }

                if (orderElements.length === 5) {
                    let milkPrice = (drinkPrice * 0.1).toFixed(1);
                    drinkPrice += Number(milkPrice);

                    if (+orderElements[4] !== 0) {
                        drinkPrice += 0.10;
                    }
                } else {
                    if (+orderElements[3] !== 0) {
                        drinkPrice += 0.10;
                    }
                }
                break;
            case 'tea':
                drinkPrice += 0.80;
                if (orderElements.length === 4) {
                    let milkPrice = (drinkPrice * 0.1).toFixed(1);
                    drinkPrice += Number(milkPrice);

                    if (+orderElements[3] !== 0) {
                        drinkPrice += 0.10;
                    }
                } else {
                    if (+orderElements[2] !== 0) {
                        drinkPrice += 0.10;
                    }
                }
                break;

        }

        if (drinkPrice <= insertedCoins) {
            incomeMoney += drinkPrice;
            console.log(`You ordered ${drinkType}. Price: $${drinkPrice.toFixed(2)} Change: $${(insertedCoins - drinkPrice).toFixed(2)}`);
        } else {
            console.log(`Not enough money for ${drinkType}. Need $${(drinkPrice - insertedCoins).toFixed(2)} more.`);
        }

    }
    console.log(`Income Report: $${incomeMoney.toFixed(2)}`);
}

// solution(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
// solution(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
solution(['8.01, coffee, decaf, 4', '1.99, tea, 2']);