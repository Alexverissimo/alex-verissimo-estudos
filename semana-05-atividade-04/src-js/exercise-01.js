"use strict";
class Person {
    constructor(name, lastName, age, isOlderThanEighteen, favoriteFoods) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = isOlderThanEighteen;
        this.favoriteFoods = favoriteFoods;
        this.fullName = '';
    }
    setFullName() {
        return this.fullName = `${this.name} ${this.lastName} `;
    }
    showUserData() {
        return `FullName: ${this.setFullName()}\nAge: ${this.age}\nfavoritesFoods: ${this.favoriteFoods}`;
    }
}
let Person01 = new Person('Jorge', 'Ben-jor', 100, true, ['pastel', 'macarrão com queijo', 'Cuscuz']);
console.log(Person01.showUserData());
