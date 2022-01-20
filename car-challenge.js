class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk () {
        return 'Beep.';
    }

    toString () {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor (make,model,year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor (make,model,year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine () {
        return 'VROOM!!!'
    }
}

class Garage {
    constructor (capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        
    }

    add (car) {
        if (!(car instanceof Vehicle)) {
            alert('only vehicles allowed in here!');
            throw new Error('only vehicles allowed in here!');
        }

        if (this.vehicles.length >= this.capacity) {
            alert("Sorry, we're full!");
            throw new Error("Sorry, we're full!");
        }
        this.vehicles.push(car);
        return `${car.year} ${car.make} ${car.model} added!`;
    }
}