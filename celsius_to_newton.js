/* Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console
*/

let celsius = 50;
newton = Math.floor(celsius * (33/100));
console.log("The temperatue is: " + newton + " Newtons.");