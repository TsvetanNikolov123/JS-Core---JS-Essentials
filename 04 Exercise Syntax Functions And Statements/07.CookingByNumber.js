function solution(result) {
    let number = result[0];

    for (let i = 1; i < result.length; i++) {
        let operation = result[i];
        number = operate(operation);
        console.log(number);
    }

    function operate(operation) {
        switch (operation) {
            case "chop":
                return chop(number);
            case "dice":
                return dice(number);
            case "spice":
                return spice(number);
            case "bake":
                return bake(number);
            case "fillet":
                return fillet(number);
        }
    }

    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number - number * 0.2;
    }
}

// solution(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solution(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);