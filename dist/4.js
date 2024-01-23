class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.tenants = [];
        this.door = false;
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("Door open");
        }
        else {
            console.log("Door closed");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door open");
        }
        else {
            console.log("Door closed");
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map