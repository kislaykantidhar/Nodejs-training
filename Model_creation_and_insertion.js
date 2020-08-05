const { Sequelize,DataTypes } = require('sequelize');



const sequelize = new Sequelize('postgres://myuser:123@localhost:5432/mydb')

// sequelize.authenticate().then(msg=>{
//     console.log("connected ya'll");
// }).catch(err=>{
//     console.log(err);
// })

var Engineer=sequelize.define('engineer',{
    eid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(40),
        allowNull:false
    }
})
const eng= Engineer.build({name:"Kislay"});
(async()=>{
    let s= await eng.save();
    
})().then(msg=>{console.log("inserted into database");sequelize.close()});
//Engineer.sync();

