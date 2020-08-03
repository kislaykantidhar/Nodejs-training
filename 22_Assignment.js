const Joi=require('joi');
const studentSchema=Joi.object({
    name: Joi.string().min(3).max(30),
    age:  Joi.number().integer().min(17),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    subjects: Joi.array().items(Joi.string()).min(3).max(6),
    cgpa:  Joi.number().min(2).max(10)
});



var student = {
    name: "test",
    age: 20,
    email: "test@yopmail.com",
    subjects: ["A1", "A2", "B1", "B2"],
    cgpa: 8
    };
let ob1=studentSchema.validate(student);
console.log(`value:${ob1.value},error:${ob1.error}`);

console.log("-----------------------------------");
var student2 = {
    name: "test",
    age: 20,
    email: "test@yopmail.com",
    subjects: ["A1", "A2"],
    cgpa: 8
    };
let ob2=studentSchema.validate(student2);
console.log(`value:${ob2.value},error:${ob2.error}`);
