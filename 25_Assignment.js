var Promise=require('bluebird')
var fs=Promise.promisifyAll(require('fs'));

let readTheFile=(filename)=>{
    fs.readFileAsync(filename,"UTF-8")
    .then(dat=>{
        console.log(dat);
    }).catch(err=>{
        console.log(err);
    })
}
readTheFile("24_Assignment.js");

readTheFile("doesnotexist.txt");
// [OperationalError: ENOENT: no such file or directory, open 'doesnotexist.txt'] {
//     cause: [Error: ENOENT: no such file or directory, open 'doesnotexist.txt'] {
//       errno: -2,
//       code: 'ENOENT',
//       syscall: 'open',
//       path: 'doesnotexist.txt'
//     },
//     isOperational: true,
//     errno: -2,
//     code: 'ENOENT',
//     syscall: 'open',
//     path: 'doesnotexist.txt'
//   }