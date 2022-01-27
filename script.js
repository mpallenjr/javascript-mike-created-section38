
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense= true;
if (hasDriversLicense) console.log('I can drive :D');
//when strict mode is activates it throws this error (script.js:6 Uncaught ReferenceError: hasDriverLicense is not defined)
//deactivated it thows no errors

const interface = 'Audio'; // with strict mode (Uncaught SyntaxError: Unexpected strict mode reserved word)

//strict mode reserves words JS may want to use in the future for a feature.  This helps avoid nameing conventions that can conflict witht eh language in the future.  

//should alaways have strict mode on. 
*/

// function holds one or more complete lines of code where a variable holds a value
/*
function logger() {
  // withing these curly braces is called 'the function buddy'
  // this is the code that gets ran when the function is called
  console.log('My name is Mike');
}

logger(); // invoking /running /calling the function. interchangeable terms for executing this code. 
logger();
logger(); // because it is a function you can easily call the same block of code multiple times 


function fruitProcessor(apples, oranges) {     // example of function with 'parameters', variables that are specific only to this function and are defined when this function is called. 
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;  //the result of executing this function

}                     

const appleJuice = fruitProcessor(5,0) // the numbers in these praenthesis are the values to be assigned to the parameters in the fruitProessor function. 
                    // the values of the parameters are called the 'arguments'.  after the function runs, the return line turns the called function into 'juice', so the function become a value, so to save that value, you need to assign a variable to is (appleJuice) and then printing that with a console log.  Alternatively you could print the value without assigning it to a variable, only logging the result. 


console.log(appleJuice); // value assigned to variable and printed
console.log(fruitProcessor(5,0)); // value printed as a result of the function running

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// keep your code DRY.  Dont Repeat Yourself.  Functions are a key to keeping your code DRY

console.log(Number('23')); // dont forget there are built in functions also!
const num = Number('11');
console.log(num);
*/
/*
//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1986);
console.log(age1);
//function expression
const calcAge2 = function (birthYear) {   // this is an example of an anonomyous function where the above was names calcAge1. in this case an expression is created with the anonomyous function, and the value of that function is scored into calcAge2, ultimately being the name of the function executed. 
  return 2037 - birthYear;
}

const age2 = calcAge2(1986);

console.log(age1, age2)

// two different types of functions, with the same reuslts, but will have different needs at times. 
// you can call a function delcaration before you define it (might not be a good idea) while you cannot do that for a function expression(initialization error)
*/
/*
//Function expression
 const calcAge2 = function (birthYear) {   
  return 2037 - birthYear;
}

//arrow function - special form of a function expression that is a lot easier and faster to write. the return is implicite. 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1986);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`; // the implicite return only works with one line of code, need to explicitely state return otherwise. 
}

console.log(yearsUntilRetirement(1986, 'Mike'));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}
const fruitProcessor = function (apples, oranges) { 
  const applePieces = cutFruitPieces(apples);
  const orangePieces= cutFruitPieces(oranges);
  

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;  

}                     
console.log(fruitProcessor(2,3));
// the 2 and 3 in fruit processor on ~106 link to ~97 apples and oranges, which link to apples in apple in cutpieces, replacing the fruit placeholder in cutpieced above, then being multiplied by 4, storing 8 in applePieces, to be rendered in juice. 
*/
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

if(retirement > 0) {
  console.log(`${firstName} retires in ${retirement} years`)
  return retirement; // a return statment will immediately exit the function
} else {
  console.log('This person has already retired 🎉')
  return -1; // if youre working with numbers its best to use a number here opposed to a string when programming. 
}
 // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1986, 'Mike'));
console.log(yearsUntilRetirement(1940, 'Jonas'));


//function declaration , can be used bedore declared in the code

//function expression , function value stored in a variable

//arrow function , great for a quick one-line function. Has no this keyword
*/

