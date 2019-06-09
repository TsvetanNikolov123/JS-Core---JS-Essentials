function solution(daysToStudy) {
    let coffee = 40;         // •	Coffee - 40 mg caffeine per 100 ml
    let cocaCola = 8;        // •	Coca Cola - 8 mg caffeine per 100 ml
    let tea = 20;            // •	Tea - 20 mg caffeine per 100 ml
    let energyDrink = 30;    // •	Energy - 30 mg caffeine per 100 ml

    let dailyCoffee = 3 * (150 / 100 * coffee);
    let dailyCocaCola = 2 * (250 / 100 * cocaCola);
    let dailyTea = 3 * (350 / 100 * tea);

    let fifthDay = 3 * (500 / 100 * energyDrink);
    let ninthDay = 4 * (250 / 100 * cocaCola) + 2 * (500 / 100 * energyDrink);

    let totalCaffeine = 0;
    for (let i = 1; i <= daysToStudy; i++) {
        if (i % 5 === 0) {
            totalCaffeine += fifthDay;
        }

        if (i % 9 === 0) {
            totalCaffeine += ninthDay;
        }

        totalCaffeine += dailyCoffee + dailyCocaCola + dailyTea;
    }

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}

solution(9);