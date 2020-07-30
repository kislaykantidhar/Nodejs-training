
const {controller}= require('./controller/index');
var args=process.argv;
console.log(controller(args[2],args[3]));
