function evenElement(array){
    let result='';
for (let index = 0; index < array.length; index+=2) {
    result+=' '+array[index];
    
}
console.log(result.trim());
}
evenElement(['20', '30', '40', '50', '60'])