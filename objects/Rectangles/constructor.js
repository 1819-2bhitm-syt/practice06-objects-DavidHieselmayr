function Rec1(length,width){
    this.length= length;
    this.width = width;
    this.getArea = function () {
        return this.length * this.width;
    };
}
let rec1 = new Rec1(8,3);

console.log(`1. Rechteck:
Länge = ${rec1.length},Breite = ${rec1.width}, Fläche = ${rec1.getArea()}
`);

let rec2 = new Rec1(60,10);

console.log(`2. Rechteck:
Länge = ${rec2.length},Breite = ${rec2.width}, Fläche = ${rec2.getArea()}
`);

let rec3 = new Rec1(9,5);

console.log(`3. Rechteck:
Seitenlänge = ${rec3.length},Breite = ${rec3.width},Fläche = ${rec3.getArea()}
`);

