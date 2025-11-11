console.log("=================== indexPromises.js file ===================");


const fsPromises=require('fs').promises;
const path=require('path');
const fileOps= async () => {

try{
const data= await fsPromises.readFile(path.join(__dirname,'files','newFile.txt') ,'utf8');

await fsPromises.unlink(path.join(__dirname,'Files','text2.txt')); // delete file

await fsPromises.writeFile( path.join(__dirname,'Files','newFile2.txt'), 'This text added to file by code');
await fsPromises.appendFile(path.join(__dirname,'Files','newFile2.txt'), '\n \nThis text appended to file by code');
await fsPromises.rename(path.join(__dirname,'Files','newFile2.txt'), path.join(__dirname,'Files','newFile (1).txt'));
const newData= await fsPromises.readFile( path.join(__dirname,'Files','newFile (1).txt'),'utf8');

console.log("===================================");
console.log(newData);
console.log("===================================");


}catch(er){
    console.error(er);
}

};

fileOps();





