function townPopul(arrInput){
let registry={}
arrInput.forEach(x => {
    let [city,ppl]=x.split(' <-> ');
    if(registry[city]==undefined){
registry[city]=0;
    }
    registry[city]+=Number(ppl);
});
for (let key in registry) {
    console.log(`${key} : ${registry[key]}`);
}
}
townPopul(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Las Vegas <-> 1']
)