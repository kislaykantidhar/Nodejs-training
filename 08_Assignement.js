let Vehicle={
    noOfTires:null,
    noOfPassengers:null
}

let MotorCycle=Object.create(Vehicle);

console.log(Vehicle.isPrototypeOf(MotorCycle));//true
console.log(MotorCycle.__proto__)//{ noOfTires: null, noOfPassengers: null }

MotorCycle.type=null;
MotorCycle.describe=function(){
    console.log(`It is a ${this.type} motorcycle with ${this.noOfTires}  tires and can have ${this.noOfPassengers} passengers`);
}
console.log(MotorCycle);//{ type: null }
console.log(MotorCycle.hasOwnProperty("type"));//true
console.log(MotorCycle.hasOwnProperty("noOfPassengers"));//false,because it is in __proto__
console.log(MotorCycle.__proto__.hasOwnProperty("noOfPassengers"));//true

MotorCycle.__proto__.noOfTires=2;
MotorCycle.__proto__.noOfPassengers=2;



let cruser=Object.create(MotorCycle);
cruser.type="Cruser";
cruser.describe();



let Car=Object.create(Vehicle);
Car.__proto__.noOfTires=4;
Car.present=function()
{
    console.log(`${this.noOfPassengers} seated and ${this.noOfTires} tires`);
}
let suv=Object.create(Car);
suv.__proto__.noOfPassengers=8;
suv.present();//8 seated and 4 tires

let standard=Object.create(Car);
standard.__proto__.noOfPassengers=5;
standard.present();//5 seated and 4 tires



