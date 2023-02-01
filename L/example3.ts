/**
 * Liskov Substitution principle
 */

// class Rectangle {
//     constructor(public width: number, public height: number) { }
//
//     setWidth(width: number){
//         this.width = width;
//     }
//
//     setHeight(height: number){
//         this.height = height;
//     }
//
//     areaOf(): number {
//         return this.width * this.height;
//     }
// }

interface IFigure {
    setWidth(width: number): void;
    setHeight(height: number): void;
    areaOf(): void;
}

class Rectangle implements IFigure {
    setWidth(width: number) { };
    setHeight(height: number) { };
    areaOf() {}
}

class Square implements IFigure {
    setWidth(width: number) { };
    setHeight(height: number) { };
    areaOf() {}
}
