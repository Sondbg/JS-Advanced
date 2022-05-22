function area(input){
console.log(typeof input =='number' ? (Math.PI*input**2).toFixed(2):`We can not calculate the circle area, because we receive a ${typeof input}.`);
}
area(5)
area('name')