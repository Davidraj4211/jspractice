// for (variable in object)
//   statement



const person = {fname:"John", lname:"David", age:25};

let text = "";
for (let x in person) {
  text += person[x];


}

console.log(text);

