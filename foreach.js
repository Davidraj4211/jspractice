
 var numbers = [23, 45,15, 24, 115, 226, 2227];
 var copy = [];
 var cpin=[];
//string 
var string = ['David', 'john', 'agnel', 'Raj'];
var dup = ['a', 'b', 'y', 'j', 'j', 'k', 'a', 'p', 's'];
var count ={};
//numbers
 markLoop:
 numbers.forEach((item,index) => {console.log(`item is ${item} and intex is ${index}`);copy.push(item * 3); cpin.push(index+2);});
 console.log('orginal Array',numbers);
 console.log('copied array',copy);
 console.log('intex of  array',cpin);
//string

string.forEach((item, index, Arr) => { Arr[index] = 'hello ' + item; });
console.log('string', string);

//count items
dup.forEach((item) => {if (count[item]) {count[item]++} else {count[item]=1}})
console.log('Count',count);





