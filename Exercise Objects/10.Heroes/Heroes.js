    function solve(){
let obj={
mage(name){
    let mageChar={
    name:name,
   health:100,
    mana:100,
    cast(spell){
        console.log(this.name+' cast '+spell);
        this.mana--;
    }
}
return mageChar
},
fighter(name){
    let fightChar={
    name:name,
   health:100,
    stamina:100,
    fight(){
        console.log(this.name+' slashes at th foe!');
        this.stamina--;
    }
}
return fightChar
}


}
return obj
    }

    let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
