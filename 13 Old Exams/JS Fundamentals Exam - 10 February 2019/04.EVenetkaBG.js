function solution(arrayOfObject) {
    let townsProfit = {};

    // MOST PROFITABLE TOWN
    arrayOfObject.forEach(obj => {
        if (!townsProfit.hasOwnProperty(obj.town)) {
            townsProfit[obj.town] = 0;
        }
        townsProfit[obj.town] += obj.price;
    });

    let townWithBiggestProfitAsString = '';
    let biggestProfit = 0;
    let mostProfitableTown = '';

    const ordered = {};
    Object.keys(townsProfit)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            ordered[key] = townsProfit[key];
        });

    for (let key in ordered) {
        let currentTownProfit = ordered[key];
        if (currentTownProfit > biggestProfit) {
            biggestProfit = currentTownProfit;
            mostProfitableTown = key;
            townWithBiggestProfitAsString = `${key} is most profitable - ${currentTownProfit} BGN`;
        }
    }

    console.log(townWithBiggestProfitAsString);

    // WHICH MODEL IS MOST DRIVEN (POPULAR) IN THE MOST PROFITABLE TOWN
    let carsInMostProfitableCity = {};
    arrayOfObject.forEach(obj => {
        if (obj.town === mostProfitableTown) {
            if (!carsInMostProfitableCity.hasOwnProperty(obj.model)) {
                carsInMostProfitableCity[obj.model] = 1;
            }
            carsInMostProfitableCity[obj.model] += 1;
        }
    });

    let sortable = [];
    for (let vehicle in carsInMostProfitableCity) {
        sortable.push([vehicle, carsInMostProfitableCity[vehicle]]);
    }

    sortable = sortable.sort(function (a, b) {
        if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else {
            let tempA = Object.values(arrayOfObject).filter(x => x.model === a[0] && x.town === mostProfitableTown)[0].price;
            let tempB = Object.values(arrayOfObject).filter(x => x.model === b[0] && x.town === mostProfitableTown)[0].price;
            if (tempA < tempB) {
                return 1;
            } else if (tempA > tempB) {
                return -1;
            } else {
                let tempA = Object.values(arrayOfObject).filter(x => x.model === a[0] && x.town === mostProfitableTown)[0].model;
                let tempB = Object.values(arrayOfObject).filter(x => x.model === b[0] && x.town === mostProfitableTown)[0].model;
                if (tempA < tempB) {
                    return -1;
                } else {
                    return 1;
                }
            }
        }
    });
    let mostPopularCar = sortable[0][0];

    let towns = [];
    for (let line in arrayOfObject) {
        if (arrayOfObject[line].model === mostPopularCar) {
            towns.push(arrayOfObject[line]);
        }
    }
    let townsWithCars = {};
    towns.forEach(town => {
        if (!townsWithCars.hasOwnProperty(town.town)) {
            townsWithCars[town.town] = {plateNumbers: []};
        }
        townsWithCars[town.town].plateNumbers.push(town.regNumber);
    });
    let townsWithCarsSorted = [];
    for (let vehicle in townsWithCars) {
        townsWithCarsSorted.push([vehicle, townsWithCars[vehicle]]);
    }
    townsWithCarsSorted = townsWithCarsSorted.sort(function (a, b) {
        if (a[0] > b[0]) {
            return 1;
        } else {
            return -1;
        }
    });

    townsWithCarsSorted = townsWithCarsSorted.map(x => x[0] + ': ' + x[1].plateNumbers.sort(function (a, b) {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    }).join(', '));

    console.log(`Most driven model: ${sortable[0][0]}`);

    townsWithCarsSorted.forEach(x => {
        console.log(x);
    })
}

solution([
    {model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}]
);