//DEmostrate use of Promise.all
const pro1=(val)=>{
    return new Promise((resolve,reject)=>{
        if(val===1)
        {
            resolve(" r 1");
        }
        else
        {
            reject("not 1");
        }
    })
}

const pro2=(val)=>{
    return new Promise((resolve,reject)=>{
        if(val===2)
        {
            resolve(" o 2");
        }
        else
        {
            reject("not 2");
        }
    })
}

const pro3=(val)=>{
    return new Promise((resolve,reject)=>{
        if(val===3)
        {
            resolve("k 3");
        }        
        else
        {
            reject("not 3");
        }
    })
}

Promise.all([pro1(1),pro2(2),pro3(3)])
.then(val=>{
    console.log("value:"+val);
})
.catch(val=>{
    console.log("not:"+val);
})



Promise.all([pro1(1),pro2(45),pro3(3)])//even one  (here pro(45) fails then the error is caught and the success of other cases is not printed.
.then(val=>{
    console.log("value:"+val);
})
.catch(val=>{
    console.log("not:"+val);
})