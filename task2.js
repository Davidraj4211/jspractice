

var arry = [1, 3, 5, 7,3, 8, 6, 0, 9, 0];
//----------------------------set unic--------------------------------------------------
console.log(a=[...new Set(arry)]);
console.log(a.sort());
//------------------------------filter---------------------------------------------------//https://flexiple.com/find-duplicates-javascript-array/
var toFindunic = arry => arry.filter((item, index) => arry.indexOf(item)== index)
var unic_Elements =  toFindunic(arry);
console.log("Unic:",unic_Elements);
//we can also use  method Using the has(), method Using an object & key value pairs ,Using the "some" function ,Using iteration
var toFindduplicate = arry => arry.filter((item, index) => arry.indexOf(item)!== index)
var duplicateElements = toFindduplicate (arry);
console.log("Duplicate element:",duplicateElements )

// //array.filter(function(currentValue, index, arr), thisValue)

// var tosum = unic_Elements => unic_Elements.filter(sum);

// function sum(unic_Elements) {

//    ab=unic_Elements.filter(item,intex)  }

/////////////////// for method/////




n=unic_Elements.length;
for(i=0;i<=n;i++)
{
    for(j=i+1;j<=n;j++)
    {
        if (unic_Elements[i]+unic_Elements[j]==9)
        console.log(unic_Elements[i]+","+unic_Elements[j])}}


///-------------------------------------



     
  




                    




//--------------------------------for method------------------------------------------------








