console.log('Hello World');

const os=require('os');
const path=require('path');


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log("==================================");
console.log(__dirname); // C:\Users\ThinkPad\Desktop\NodeJs-Space
console.log(__filename); // C:\Users\ThinkPad\Desktop\NodeJs-Space\server.js

console.log("==================================");
console.log(path.dirname(__filename)); // C:\Users\ThinkPad\Desktop\NodeJs-Space
console.log(path.basename(__filename)); // server.js
console.log(path.extname(__filename)); // .js

console.log(path.parse(__filename));


const math= require('./math'/*file path */);
// or
const { add,subtract } =require('./math');


console.log(math.add(5,5));
console.log(add(5,3));
console.log(subtract(10,2));







