/**
 * Single Responsibility principle
 */

//before
// class Auto {
//     constructor(model: string) { }
//     getCarModel() {}
//     saveCustomerOrder(o: Auto) {}
//     setCarModel() {}
//     getCustomerModel(id: string) {}
//     removeCustomerOrder(id: string) {}
//     updateCarSet(set: object) {}
// }

//after
class Auto {
    constructor(model: string) { }
    getCarModel() {}
    setCarModel() {}

}

class CustomerAuto {
    saveCustomerOrder(o: Auto) {}
    getCustomerModel(id: string) {}
    removeCustomerOrder(id: string) {}
}

class AutoDB {
    updateCarSet(set: object) {}
}
