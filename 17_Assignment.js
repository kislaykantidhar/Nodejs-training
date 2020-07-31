var d=new Date()
let array=[2,4,3.5,"apostle",d,{name:"A boy has no name",says:"Vallar Morghullis"},["I"," came","from","Alabama"],`hello
its
me`];
console.log(array);
// [
//     2,
//     4,
//     3.5,
//     'apostle',
//     'Wed Jul 22 2020 11:42:16 GMT+0530 (India Standard Time)',
//     { name: 'A boy has no name', says: 'Vallar Morghullis' },
//     [ 'I', ' came', 'from', 'Alabama' ]
//   ]
console.log(typeof(array[0]));
console.log(typeof(array[2]));
console.log(typeof(array[3]));
console.log(typeof(array[4]));
console.log(typeof(array[5]));
console.log(typeof(array[6]));
console.log(array[5].name);
console.log(array[7]);