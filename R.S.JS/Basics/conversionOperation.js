let score = "33"
let value= Number(score)

console.log(typeof score);
console.log(value);
console.log(typeof value);

let u="78abc"
console.log(typeof u);
g=Number(u)
console.log(g);
console.log(typeof g);//here javascript fails to define the type of a mixing value

/**
 JavaScript fails when it comes to typa cast a mixing value,boolean value,undefined type data
  and null so be carefull when u are doing typecast (it will give odd casting or NaN which means Not a Number)
  true=>1
  false=>0
  undefined=>NaN
  "33abc"=NaN
  "33"=>33
 */
