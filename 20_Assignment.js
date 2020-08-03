const Ajv=require('ajv');
const ajv=new Ajv();

function checkValidation(validate,data){
    var valid = validate(data);
    if (!valid) return validate.errors;
    else return "DATA ACCEPTED";

}
const studentSchema={
    "type":"object",
    "required":["name","age","subjects","email","cgpa"],
    "properties":{
        "name":{
            "type":"string",
            "minLength":3,
            "maxLenght":30
        },
        "age":{
            "type":"integer",
            "minimum":17
        },
        "subjects":{
            "type":"array",
            "minItems":4,
            "maxItems":6,
            "items":{"type":"string"}
        },
        "email":{
            "type":"string",
            "format":"email"
        },
        "cgpa":{
            "type":"number"
        }
    }
}

const validate=ajv.compile(studentSchema);//it returns a function

//test 1
var student = {
    name: "test",
    age: 20,
    email: "test@yopmail.com",
    subjects: ["A1", "A2", "B1", "B2"],
    cgpa: 8
    };
console.log(checkValidation(validate,student));
console.log("--------------------------------");
//test2
var student2 = {
    name: "test",
    age: 20,
    email: "testyopmail.com",
    subjects: ["A1", "A2", "B1", "B2"],
    cgpa: 8
    };
console.log(checkValidation(validate,student2));