function validity(x1,y1,x2,y2){
let valid='';
checker(x1,y1,0,0);
checker(x2,y2,0,0);
checker(x1,y1,x2,y2)
function checker(a,a1,b,b1){
    let result=Math.sqrt((a-b)**2+(a1-b1)**2);
    result==Math.round(result)? valid='valid':valid='invalid';
   console.log(`{${a}, ${a1}} to {${b}, ${b1}} is ${valid}`);
   return
}
}
validity(3,0,0,4)
// validity(2, 1, 1, 1)