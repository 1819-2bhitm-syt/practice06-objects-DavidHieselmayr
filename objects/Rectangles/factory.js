function createReactangle(length,width){
    return{
        length,
        width,
        getArea: function () {
            return this.length * this.width;
        }
    };
}

let rec1 = createReactangle(7,4);
console.log(`1. Rechteck: Länge = ${rec1.length}, Breite = ${rec1.width}, Fläche = ${rec1.getArea()}`);

let rec2 = createReactangle(30,5);
console.log(`1. Rechteck: Länge = ${rec2.length}, Breite = ${rec2.width}, Fläche = ${rec2.getArea()}`);
