function solution(type, weight, pricePerKilogram) {

    let weightInKilograms = weight / 1000;
    let neededMoney = (weightInKilograms * pricePerKilogram).toFixed(2);

    /* second solution
     let weightInKilograms = Number.parseFloat((weight / 1000).toString());
     let neededMoney = Number.parseFloat((weightInKilograms * pricePerKilogram).toString()).toFixed(2);
     */

    console.log(`I need $${neededMoney} to buy ${weightInKilograms.toFixed(2)} kilograms ${type}.`);
}

solution('orange', 2500, 1.80);
solution('apple', 1563, 2.35);
