function generateRandomNUmber(){
   return Math.floor(Math.random() * 100) + 1; 
}
function celsiusTofahrenheit(celsius){
   return (celsius * 9)/ 5 + 32;

}
module.exports = {
   generateRandomNUmber,
   celsiusTofahrenheit,
   };