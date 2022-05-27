function sameNum(a){
    array=a.toString().split('')
console.log(array.every(x=>x==array[0]))
console.log(array.map(Number).reduce((i,u)=>i+u));
}
sameNum(2222222)
sameNum(1234)