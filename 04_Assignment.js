


const readline=require('readline');
const fs=require('fs');//for creation of stream



const noOfCharacter=(line)=>{
    return line.length;
}
const printLine=(line)=>{
    console.log(line);
}

const lineByLine=(filename,callback1,callback2)=>
{
    const readI=readline.createInterface({
    input:fs.createReadStream(filename),
    crlfDelay:Infinity
    });
    readI.on('line',(line)=>{
        callback1(line);
        
        console.log("no of character in this line:"+callback2(line));
        console.log("\n");
    });
}

lineByLine('info.txt',printLine,noOfCharacter);