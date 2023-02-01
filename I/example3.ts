/**
 * Interface segregation principle
 */

//before
// interface IAutoSet {
//     getTeslaSet(): any;
//     getAudiSet(): any;
//     getBmwSet(): any;
// }
//
// class Tesla implements IAutoSet {
//     getTeslaSet(): any { }
//     getAudiSet(): any { }
//     getBmwSet(): any { }
// }
//
// class Audi implements IAutoSet {
//     getTeslaSet(): any { }
//     getAudiSet(): any { }
//     getBmwSet(): any { }
// }
//
// class Bmw implements IAutoSet {
//     getTeslaSet(): any { }
//     getAudiSet(): any { }
//     getBmwSet(): any { }
// }

// after
interface ITeslaSet {
    getTeslaSet(): any;
}

interface IAudiSet {
    getAudiSet(): any;
}

interface IBmwSet {
    getBmwSet(): any;
}

class Tesla implements ITeslaSet {
 getTeslaSet(): any { }
}

class Audi implements IAudiSet {
    getAudiSet(): any { }
}

class Bmw implements IBmwSet {
    getBmwSet(): any { }
}
