// Array dec.

var num=[1,67,89,772,93,902,7];

const persons= ["Balaji","Sambath","Yuvan","Kalpana"];

//const  persons = new Array("Balaji","Sambath","Yuvan","Kalpana");

//multi Dimentional Array

const data= new Array(Array({ "name":"Balaji","Age":22,"DOB":2000}),
Array({ "name":"Sambath","Age":24,"DOB":1998}), 
Array({ "name":"Yuvan","Age":23,"DOB":1999}),
Array({ "name":"Muththu","Age":25,"DOB":1997}),
Array({ "name":"Kalpana","Age":24,"DOB":1998}),
Array({ "name":"Dharshan","Age":22,"DOB":2000}));

console.log(persons)
//pop /push/


console.log("Push:",persons.push("Muththu","Dharshan"))
 
console.log("pop:",persons.pop()) //

console.log(data)
//------------------------join ------------

console.log("join",persons.join("*"));

//-------------------shift()-----------------------

console.log("shift",persons.shift());

///-------------------------length---------

console.log("length:",persons.length);

///-----------------concat() ------------

console.log("concat:",persons.concat(persons,data));

///--------------------splice() ------add new value ------------

console.log("splice:",persons.splice(1,0,"John"));

//-------------------------------array to string--------------------------

console.log("toString:",persons.toString())
///---------------------------------------------------------

console.log("slice:",persons.slice(1,2));
