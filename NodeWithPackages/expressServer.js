const express=require('express');
const app= express();
const path=require('path');
const PORT= process.env.PORT || 3500;

//^/$|/index.html " that mean any route starts with / or /index.html redirect it to index.html"
app.get(['/', '/index', '/index.html'], (req,res)=>{
//res.sendFile('./views/index.html',{root:__dirname});
//
res.sendFile(path.join(__dirname,'views','index.html'));

});

app.get(  ['/new-page.html', '/new-page', '/new-page.html'], (req,res)=>{

res.sendFile(path.join(__dirname,'views','new-page.html'));

});


app.get(['/old-page.html', '/old-page', '/old-page.html'])

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
