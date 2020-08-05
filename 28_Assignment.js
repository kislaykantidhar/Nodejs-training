const {Sequelize,DataTypes, Deferrable}=require('sequelize');
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

async function showEngineers(nameOfProject)
{
    let project=await Project.findOne({where:{name:nameOfProject}});
    if(project==null)
    {
        console.log("No such details were found");
    }
    else{
        engineers=await Engineer.findAll({where:{assigned_to:project.pid}});
        if (engineers==null)
        {
            console.log("No such details were found");

        }
        else{
            console.log( `engineers in ${project.name}`);
            for(let engineer of engineers)
            {
                console.log(`ID:${engineer.eid} name:${engineer.name}`);
            }
        }
    }
}

showEngineers("Project One")
.then(()=>showEngineers("Project Two"))
.then(()=>showEngineers("Project Three"))
.then(()=>sequelize.close())
.then(()=>console.log("connection closed"));