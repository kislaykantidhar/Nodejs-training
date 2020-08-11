# Nodejs-training
It is a repo which contains codes from my nodejs training assignments 
1. 01_Assignment.js ->Print number 1 to 100 without using any loop. 
2. 02_Assignment.js ->Demonstrate the use of Promise
3. 03_Assignment.js ->Demonstrate the use of Promise.all
4. 04_Assignment.js ->Use fs package to read data from a file and print it, using callback way.
5. 05_Assignment.js ->Demonstrate the use of callback, i.e both error and success.
6. 06_Assignment.js ->Demonstrate different ways to create an object.
7. 07_Assignment.js ->Demonstrate the use of prototype
8. 08_Assignment.js ->Demonstrate prototypical Inheritance
9. 09_Assignment.js ->Demonstrate Class and its functionality.(super/constructor/get/set/static)
10. 10_Assignment.mjs,11_Assignment.mjs->Demonstarte the use of export
11. 12_Assignment.js,13_Assignment.js->Demonstrate the use of module.exports,require 
12. 14_Assignment -> Contains package.json ,index.js,controller folder and service folder. service  folder has service1.js and service2.js,which prints even and odd nos respectively.
13. 15_Assignment.js ->Write a program that takes a date and prints the day on which the date falls on.
14. 16_Assignment.js ->Show examples of use of splice method to add and remove elements from array.
15. 17_Assignment.js ->Demonstrate an example that shows that array elements can be of different types.
16. 18_Assignment.js ->Demonstrate replace all occurrences of a string within a sentence.
17. 19_Assignment.js ->Write a function that takes object as input and prints all keys and values in a valid JSON format 
18. 20_Assignment.js ->Demonstrate the use of AJV, validate the JSON which should have at least these keys:-
name, age, email, subjects, cgpa.

ex: student = {
name: ‘test’,
age: 20,
email: ‘test@yopmail.com’,
subjects: [‘A1’, ‘A2’, ‘B1’, ‘B2’],
cgpa: 8
}

19. 21_Assignment.js -> Demonstrate the use of Moment. Your system should accept a date as input and validate whether the date is between your system defined date range. If it is present than return true otherwise false. Apart from this the system should tell the user, input date is near to which date of the system defined range and the difference between those date(s) in ms.

Example: Suppose your input is 2018/10/01 (YYYY/MM/DD) and system defined range is 2018/09/20 (start date range) and 2018/10/10 (end date range). Final response should be
result = {
inBetween: true,
nearDate: 2018/10/10,
difference: xxxxx(in ms)
}

20. 22_Assignment.js ->Demonstrate the use of JOI. validate the JSON which should have at least these keys:-
name, age, email, subjects, cgpa.

ex: student = {
name: ‘test’,
age: 20,
email: ‘test@yopmail.com’,
subjects: [‘A1’, ‘A2’, ‘B1’, ‘B2’],
cgpa: 8
};

21. 23_Assignment.js ->Demonstrate the use of chance, your system should always return a object where values for its keys are random.
Object should have at least these keys name, age, email, subjects, cgpa.

22. 24_Assignment.js ->Demonstrate the use of JWT (both token creation and verification)

23. 25_Assignment.js & 26_Assignment.js ->Demonstrate the use of bluebird promises, like Promise.map, promisifying a npm package and its uses

24. 27_Assignment.js-> Use sequelize to create the following database structure along with relations
Engineer
Project
Manager
	A project can have multiple Engineers
	Each project will have only one manager

25. 28_Assignment.js->Write a function that prints details of all engineers working on project (search by project name)
26. 29_Assignment.js->Write a function to assign manager to a project
27. 30_Assignment.js and  31_Assignment.js->Write a function to delete update Engineer details
28. 32_Assignment.js->Write a function to delete project

Use sequelize methods to perform above operations. Dont rely on raw sql queries.

29. 33_Assignment ->i).Create a web server using express framework. Free to use any design pattern.(The project directory should have seperate folder for controller, routes, services, library)
Create an api which return a JWT token for the input received in req.body
Create an api which validates the token and return true or false
Create an api which takes number as input and return the first 10 multiple of that number.
Create an api which takes a sentence as input and return an object which has alphabet/character (case insensitive) as key and occurrence as value.
Example: let's play
Output: {
l: 2,
e: 1,
t: 1,
s: 1,
p: 1,
a: 1,
y: 1,
!: 1,
‘: 1
};

Create an api, which check the number is armstrong or not. It should be get api where number should be passed as query parameter.


Note: All api should have validation implemented either using AJV or JOI.
	The last two api should have token validation apart from its main logic.Depending on token validation, main logic should be called.(hint: route based middleware design pattern)



ii). Write down the integration and unit test cases for all the api.Integration testing should be done for controller and unit testing for services, so that code coverage is 100%.
Use mocha, chai/ sinon, nyc for the task. 

