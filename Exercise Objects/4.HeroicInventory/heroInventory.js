function registryHero(inputArr){
let register=[];
for (let index = 0; index < inputArr.length; index++) {
   let hero={};
   let [name,level,items]=inputArr[index].split(' / ');
    hero.name=name;
    hero.level=Number(level);
    if(items!=undefined){
        items=items.split(', ');
    hero.items=items;
    }else{
        hero.items=[];
    }
    register.push(hero);
}
console.log(JSON.stringify(register));
}
registryHero(['Jake / 1000 / Gauss, HolidayGrenade']
)