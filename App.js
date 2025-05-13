/*const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
//Introduction  of node
/*const amount = 12
if(amount > 10){
  console.log("small number");
}
else{
  console.log("Large number");
}
console.log("hey it's mai first node App!!!");
*/
//global
/*
console.log(__dirname)
setInterval(()=>{
  console.log('Hello World')
},1000)
//modules
const John ="john"
const Peter = "Peter"

const sayHi = (name) => {
  console.log(`Hello There ${name}`)
}
sayHi('Susan')
sayHi(John)
sayHi(Peter)
sayHi('Chaba')
*/
//console.log(process);
const {generateRandomNUmber,celsiusTofahrenheit} = require('./utils'); 

console.log(`Random Number ${generateRandomNUmber()}`);

console.log(`Celcius to fahrenheit ${celsiusTofahrenheit(0)}`)
