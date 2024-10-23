const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
console.log('step 1 : ',  mysteriousString);

// step2 : split the myserious string it into an array, so that each letter becomes an item (the separator should be an empty string).
const myArray = mysteriousString.split("");
console.log("step 2 :" , myArray);

// step3 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0 !)
let myArray2 = myArray.slice(14, 31)
console.log("step 3 :" , myArray2);

// step4 : Splice the array to replace 2 elements from index 5 with only one element : the letter 't'
let myArray3 = myArray2.splice(5, 2, "t");
console.log("step 4 :" , myArray2);

// step5 : reverse the array
// TODO : change this line
let myArray4 = myArray2.reverse();
console.log("step 5 :" , myArray2)

// step6 : each element of the array back into a string (the separator should be an empty string)
let finalStep = myArray2.join()
console.log("Final step :" , finalStep)