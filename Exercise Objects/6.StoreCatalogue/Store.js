function catalogue(inputArr){
let result={};
for (let index = 0; index < inputArr.length; index++) {
    let [item,price]=inputArr[index].split(' : ');
    price=Number(price);
    let letter=item[0].toUpperCase();
if(result.hasOwnProperty(letter)==false){
    result[letter]={}
}
result[letter][item]=price;
}
let sorted=Object.keys(result).sort((a,b)=>a.localeCompare(b));
for (let key of sorted) {
    console.log(key);
   let items=Object.keys(result[key]).sort((a,b)=>a.localeCompare(b));
   items.forEach(x=>console.log(`  ${x}: ${result[key][x]}`))
}

}
catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)

