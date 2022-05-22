function mathOperations(a,b,string){
let result;
switch (string){
case '+':result=a+b;    break;
case '-':result=a-b;    break;
case '*':result=a*b;    break;
case '/':result=a/b;    break;
case '%':result=a%b;    break;
case '**':result=a**b;    break;
    default:
        break;
}
console.log(result);
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')