interface Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
  }
  
  class Person implements Person {
        fullName:string=''
        constructor( 
            public name:string, public lastName:string, public age:number,
            public isOlderThanEighteen:boolean,public favoriteFoods:string[],
        ) { }

        setFullName() {
            return this.fullName = `${this.name} ${this.lastName} `;
        }
        showUserData() {
            return `FullName: ${this.setFullName()}\nAge: ${this.age}\nfavoritesFoods: ${this.favoriteFoods}`
        }

  }

  let Person01 = new Person ('Jorge','Ben-jor',100,true,['pastel','macarrão com queijo','Cuscuz'])
  console.log(Person01.showUserData())