class Cars{
    constructor(make, model, type, year, color, fuelType){
        this.make = make;
        this.model = model;
        this.type = type;
        this.year = year;
        this.color = color;
        this.fuelType = fuelType;
}
sellingMakeModel(){
        console.log(`Look I know your hesitant about the price but this ${this.make}${this.model}, will 100% be worth its value!`);
}
}

let fastCar = new Cars('Audi', 'R8', 'Luxury', 2023, 'silver', 'premium');

class Supercar extends Cars{
    constructor(make, model, type, year, color, fuelType){
        super(make, model, type, year, color, fuelType);
    }
    sellingMakeModel(){
        console.log(`The ${this.make}${this.model} is one our finest cars!`);
    }
}
console.log(fastCar);
fastCar.sellingMakeModel();

let superCar = new Supercar('Bugatti', 'Veyron', 'Super', 2023, 'Black', 'Premium');

console.log(superCar);
superCar.sellingMakeModel();