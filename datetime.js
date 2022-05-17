const a= new Date();

// console.log(a.getMonth()+1);
// console.log(a.getFullYear());
// time=a.getTime()//(milliseconds since January 1, 1970)
// console.log(time)

// console.log(Date.now());

// console.log(a.setFullYear(3057,11,09));


a.setMonth(a.getMonth()+6);

b=Date(a.toLocaleDateString('default',{month:'long'}))

console.log(b);

console.log(a.toLocaleDateString('default',{month:'long'}));

