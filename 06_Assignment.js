//1---creation of object using constructor (via function keyword)
function Hero(name,rank,power,height,weight)
{
    this.name=name;
    this.rank=rank;
    this.power=power;
    this.height=height;
    this.weight=weight;
}
let sekiro=new Hero('Sekiro',25,56,5.8,121);
console.log(sekiro)

//2---creation of object using constructor and adding some extra attributes

let namor=new Hero('Namor',45,40,7.2,300);
namor.age="unknown";
namor.attack=function(){console.log("hydro-blast")}
console.log(namor)

//3---using object literals

let ironman={
    name:"Tony Stark",
    rank:4,
    power:85,
    height:5.11,
    weight:140
}
ironman.attack=function(){
    console.log("Wait a minute .Where is my suit?.......JAAARVIS!!!!");
}
console.log(ironman);


//4---using Object.create

let supersoldier={power:90,height:7,weight:130}
let captainAmerica=Object.create(supersoldier);
captainAmerica.name="Roger";
console.log(captainAmerica);
console.log(captainAmerica.power,captainAmerica.height);


//5---using new Object()
let falcon=new Object();
falcon.name="FALCON";
falcon.age=45;
falcon.power=function(){
    console.log("fly");
}
console.log(falcon);


//6---using es6 way.
class Villain
{
    constructor(name,power,height,weight,attack)
    {
        this.name=name;
        this.power=power;
        this.height=height;
        this.weight=weight;
        this.attack=attack;

    }
    ability=()=>{
        console.log(this.attack);
    }
}
let thanos=new Villain("Thanos",Infinity,12,800,"click!");
thanos.ability();
console.log(thanos);