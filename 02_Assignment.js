//Demonstrate the use of Promise 
const delivery=(status)=>{
    return new Promise((resolve,reject)=>{
        if (status=="not-delivered")
        {
            reject("The delivery address not found");
            
        }
        else if(status=="delivered")
        {
            resolve("address found and delivered ");
        }
    })
}
const whereIsItDelivered=(message)=>{
    return new Promise((resolve,reject)=>{
        resolve(message+":SOME WHERE IN INDIA");
    })
}

const isItDelivered=(stat)=>{
    delivery(stat)
    .then(message=>{
        console.log(message);
        return whereIsItDelivered(message);
    })
    .then(info=>{console.log(info)})
    .catch(message=>{
        console.log("Item not delivered: "+message);
        throw new Error("just checking the second block of catch")
    })
    .catch(err=>{console.log(err)})
    
}

const run=()=>{
    isItDelivered("delivered")
}

setTimeout(run,2000);

isItDelivered("not-delivered");
