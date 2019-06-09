function solution(capacity, arrayOfPassengers) {
    let wagon = [];
    let leftPassengers = 0;

    for (let i = 0; i < arrayOfPassengers.length; i++) {
        if (capacity >= arrayOfPassengers[i] + leftPassengers) {
            wagon.push(arrayOfPassengers[i] + leftPassengers);
            leftPassengers = 0;
        } else {
            leftPassengers = leftPassengers + arrayOfPassengers[i] - capacity;
            wagon.push(capacity)
        }
    }

    if (leftPassengers === 0) {
        console.log(wagon);
        console.log('All passengers aboard');
    } else {
        console.log(wagon);
        console.log(`Could not fit ${leftPassengers} passengers`);
    }
}

// solution(10, [9, 39, 1, 0, 0]);
solution(6, [5, 15, 2]);