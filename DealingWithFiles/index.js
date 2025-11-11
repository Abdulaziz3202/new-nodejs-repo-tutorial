console.log("=================== index.js file ===================");


const fs= require('fs');
const path=require('path');

// reading file

fs.readFile(path.join(__dirname,'files','text1.txt') ,'utf8' , (err,data)=>{
if (err) throw err;

/*if you didn't add utf8 add you have to add data.toString() */
console.log(data);
});


// writing a file

// will write a file once
fs.writeFile( path.join(__dirname,'Files','FileAddedByCode.txt'), 'This text added to FileAddedByCode file by code' ,(err)=>{
    if(err) throw err;
    console.log('Adding a file has been completed');
});

// will write a file once and adding a text for every run
fs.appendFile( path.join(__dirname,'Files','FileAppendedByCode.txt'), 'This text added to FileAddedByCode file by code using append function' ,(err)=>{
    if(err) throw err;
    console.log('Appendnding a file has been completed');
});




// below way to update existing file without overwrite it, and appended text if already exists will not append it
// we are using call back for async purposes
fs.writeFile( path.join(__dirname,'Files','FileAddedByCode.txt'), 'This text added to FileAddedByCode file by code' ,(err)=>{
    if(err) throw err;
    console.log('Adding a file has been completed');

fs.appendFile( path.join(__dirname,'Files','FileAddedByCode.txt'), '\n \n added text to existing file by append function' ,(err)=>{
    if(err) throw err;
    console.log('Appendnding a file has been completed');

fs.rename( path.join(__dirname,'Files','FileAddedByCode.txt'), path.join(__dirname,'Files','renamedByCode.txt'),(err)=>{
    if(err) throw err;
    console.log('Appendnding a file has been completed');
});


});

});




// below way to edit existing file




process.on('uncaughtException', err=>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})