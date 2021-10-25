/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sumOftwoInt = function (p1, p2) {
    if (p1 === p2) return (p1 + p2) * 3;
    if (p1 !== p2) return p1 + p2;
  };
  console.log(sumOftwoInt(6, 7));

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
function trueFalse(int1 , int2){
    if ((int1 === 50 || int2 === 50) || int1+int2 === 50)
    return true;
    else return false;
}
console.log(trueFalse(11 , 39))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
function removeChar(){
    let str = "Strive school";
    str = str.slice(0 , 5) + str.slice(6 , 12);
    return str
}
console.log(removeChar())

/* 4. Create a function to find and return the largest of three given integers. */
function compareInt(int1, int2, int3){
    switch(int1, int2, int3){
        case int1>int2 && int1>int3: return "int1 is the biggest";
        break;
        case int2>int1 && int2>int3: return "int2 is the biggest";
        break;
        default: return "int3 is the biggest";
    }
}
console.log(compareInt(12, 55, 100));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
 function rangeOfNumbers(n1 , n2){
        return ((n1>40 && n1<60) || (n1>70 && n1<100)) && ((n2>40 && n2<60) || (n2>70 && n2<100));
}
 
console.log(rangeOfNumbers(95, 50));


/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
function repeatedString(string){
  let newString = string.repeat(20)
  return `I like  + ${newString}`;
}

console.log(repeatedString("IceCream"))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
const cityName = function (city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } 
    else {
          return false;
    }
 };
console.log(cityName("lisboa"))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

function sumOfAllElements(newArray){
    let sum = 0;
    for (let i=0; i<newArray.length; i++){
        sum += newArray[i];
    }
    return sum;
}
console.log(sumOfAllElements([4, 7, 1]));

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
   function testAnArray(arr) {
        if (arr.includes(1) || arr.includes(3)) {
            return true
        } else {
            return false
        }
    }

console.log(testAnArray([11 , 13]));

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

    function testAnArrayNew(arr) {
        if (!arr.includes(1) || !arr.includes(3)) {
            return true
        } else {
            return false
        }
    }

console.log(testAnArrayNew([11 , 13]));

// 11. Create a function to find the longest string from a given array of strings. 
//     Pass the array as parameter and return the longest string.
    function longestStringOfArray(){
        let arrayOfString = ["css" , "html" , "javascript" , "golang"];
        for(let i=0; i<arrayOfString.length; i++){
           let eachStringLength = arrayOfString[i].length
           let emptyArr = [].push(eachStringLength);
           return emptyArr
        }
        
}

console.log(longestStringOfArray())
/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/


/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */


/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */


/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */