var boilWater=()=>{
    return (new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Water Boiled");
        },3000);
    }))
}

var pourMilk=()=>{
    return(new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Milk poured");
        },2000);
    }))
}

var addTeaLeaves=()=>{
    return(new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Tea Leaves added");
        },1000);
    }))
}

var addSugar=()=>{
    return (new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Sugar Added");
        },1000);
    }))
}

var makeTea=[
    boilWater,
    pourMilk,
    addTeaLeaves,
    addSugar
]


var bluebird=require('bluebird');
bluebird.map(makeTea,function(eachstep){
    return eachstep();
}).then(
    msg=>{
        console.log(msg);
        console.log("done")
    }
).catch(
    err=>{
        console.log(err);
    }
)