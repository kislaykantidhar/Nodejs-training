const Chance=require('chance');
var chance=new Chance()
function getPerson()
{
    let name=chance.name();
    let age=chance.age({min:17});
    let email=chance.email();
    let sub=[];
    for(let i=0;i<chance.natural({min:3,max:6});i++)
    {
        sub.push(chance.string({length:3}));
    }
    let cgpa=chance.natural({min:2,max:10});
    let obj={
        name:name,
        age:age,
        email:email,
        sub:sub,
        cgpa:cgpa
    }
    return obj;

}





let personObj;
for (let i=0;i<10;i++)
{
    personObj=getPerson();
    console.log(personObj);
}