function lowestPrice(inputArr){
let result={};
for (let iterator of inputArr) {
    let [town,product,price]=iterator.split(' | ');
    price=Number(price);
    if(result[product]==undefined || result[product].price>price){
result[product]={};
result[product].price=price;
result[product].town=town;
    }

}
for (let product of Object.keys(result)) {
    console.log(product+` -> ${result[product].price} (${result[product].town})`);
}
}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)