const {Sequelize,DataTypes, Deferrable, where}=require('sequelize');
const sequelize=new Sequelize('postgres://myuser:123@localhost:5432/mydb');
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


async function deleteProject(p_id){
    await Engineer.update({assigned_to:null},{where:{assigned_to:p_id}}).then(()=>Project.destroy({where:{pid:p_id}}));

}

deleteProject(4).then(()=>{
    console.log("deleted!");
    return sequelize.close();
}).then(()=>{
    console.log("connection closed");
}).catch((err)=>{
    console.log(err)
})
