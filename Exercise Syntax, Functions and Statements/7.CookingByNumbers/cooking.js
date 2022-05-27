function cooking(a,...param){
    a=Number(a)
let functions={chop,dice,spice,bake,fillet}
    param.forEach(x=>{
        a=functions[x](a);
    console.log(a);
})
function chop(num){
    num=num/2
    return num
}
function dice(num){
    return Math.sqrt(num);
}
function spice(num){
    return num+1
}
function bake(num){
    return num*3
}
function fillet(num){
    return num*0.8
}

}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')