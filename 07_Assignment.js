function Home(doors,windows,floors,type)
{
    
    
        this.doors=doors;
        this.windows=windows;
        this.floors=floors;
        this.type=type;
        this.openedDoors=0;
    
    openNDoors=(num)=>{
        if (num<=this.doors)
        {
            console.log(`${num} doors are opened`);
            this.openedDoors=num;
        }
        else
        {
            console.log('these many doors are not in the house');
        }
    }
}

let myHouse=new Home(4,8,2,"general");
console.log(myHouse);
Home.prototype.openNDoors=function(num){
    if (num<=this.doors)
    {
        console.log(`${num} doors are opened`);
        this.openedDoors=num;
    }
    else
    {
        console.log('these many doors are not in the house');
    }
}
myHouse.openNDoors(3);

// Home {
//     openNDoors: [Function: openNDoors],
//     doors: 4,
//     windows: 8,
//     floors: 2,
//     type: 'general',
//     openedDoors: 3
//   }
console.log(Home.prototype);//Home { openNDoors: [Function] }

Home.prototype.closeNDoors=function(n){
    if (n<=this.openedDoors)
    {
        console.log(`closing ${n} doors`);
        this.openedDoors-=n;
    }
    else
    {
        console.log(this.openedDoors+"These many doors aren't open");
    }
}
myHouse.closeNDoors(2);
console.log(myHouse.openedDoors);
console.log(myHouse);