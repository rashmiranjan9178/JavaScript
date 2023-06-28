// #Premitive:-When we calls them it gives the copy value only:-7types
//String,number,boolean,null,undefined,symbol,BigInt
const num = 78
const val = 78.9
const isLoggedIn=true
const op=null
let userName;
const id = Symbol('123')
const id2=Symbol('123')
console.log(id===id2);
//Symbol is a method to store any unique variable and it always returns a different value than given valueso above line will print false
const big=787878778809n
console.log(big);



//#Reference/non-premitive:-We can use memory reference of these:-Array,Objects,Functions
//Array
const heros = ["saktiman","naagraaj","subu"]//Arrays
console.log(heros);

//object
let myObj={
name:"hitesh",
age:22,
}
console.log("The object is :-",myObj);

//function
const myFunction = function() {
    console.log("Hello world");
}
myFunction()

//check
console.log(typeof myFunction);
console.log(typeof op);//it will give object type
console.table([typeof op,typeof myFunction,typeof myObj,
    typeof num,typeof null,typeof val,typeof isLoggedIn,typeof id,typeof id2])
