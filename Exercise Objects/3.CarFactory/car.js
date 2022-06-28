function carAssembly(carInput){
let car={}
let engine=[{power: 90, volume:1800},{power: 120, volume:2400},{power: 200, volume:3500},];
car.model=carInput.model;
car.engine=engine.filter(x=>x.power>=carInput.power)[0];
car.carriage={type:carInput.carriage,color:carInput.color};
car.wheels=Array(4).fill(carInput.wheelsize%2==0?Math.floor(carInput.wheelsize-1):carInput.wheelsize);
console.log(car);
}
carAssembly({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)