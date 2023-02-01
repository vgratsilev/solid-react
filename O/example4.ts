/**
 * Open–closed principle
 */

abstract class Auto {
    abstract getPrice(): string

}

class Tesla extends Auto {
    getPrice() {
        return '80 000$';
    }
}

class Audi extends Auto {
    getPrice() {
        return '60 000$';
    }
}

class Bmw extends Auto {
    getPrice() {
        return '70 000$';
    }
}


const shop: Array<Auto> = [
    new Tesla(),
    new Audi(),
    new Bmw(),
];

const getPrice = (auto: Array<Auto>): string | void => {
    for(let i = 0; i < auto.length; i++) {
        auto[i].getPrice();
    }
}

getPrice(shop);
