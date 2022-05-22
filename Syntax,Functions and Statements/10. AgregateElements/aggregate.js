function agregate(array){
console.log(array.reduce((a,b)=>a+b));
console.log(array.map(a=>1/a).reduce((a,b)=>a+b));
console.log(array.reduce((a,b)=>String(a)+String(b)));
}
agregate([1,2,3])
agregate([2,4,8,16])