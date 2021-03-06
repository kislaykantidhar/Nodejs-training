const {Sequelize,DataTypes, Deferrable}=require('sequelize');
const sequelize=new Sequelize('postgres://myuser:123@localhost:5432/mydb');//open connection

(async ()=>{ await sequelize.authenticate().then(msg=>{
    console.log("connected to server");
       
    //manager table 
    const Manager=sequelize.define("manager",{
        mid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(30)
        }

    },{timestamps:false});

    //project table has a foreign key m_id referenced too Manager.mid
    const Project=sequelize.define("project",{
        pid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(30),
            unique:true
        },
        m_id:{
            type:DataTypes.INTEGER,
            references:{
                model:Manager,
                key:'mid',
                deferrable:Deferrable.INITIALLY_IMMEDIATE
            }
        }
    },{timestamps:false});

    //engineer table -has a foreign key assigned_to which is referenced to Project.pid
    const Engineer=sequelize.define("engineer",{
        eid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING(30)
        },
        assigned_to:{
            type:DataTypes.INTEGER,
            references:{
                model:Project,
                key:'pid',
                deferrable:Deferrable.INITIALLY_IMMEDIATE
            }
        }
    },{timestamps:false});
    
    Manager.sync().then(()=>{
        console.log("Manager table is created");
         return Project.sync()}).then(()=>{
            console.log("Project table is created");
            return Engineer.sync()}).then(()=>{
                console.log("Engineer table is created");
                return sequelize.close();
            }).then(()=>{
                console.log("job finished\nconnection close");
            })
})})()




