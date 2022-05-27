function commonDiv(a,b){
for (let i=b; i > 0; i--) {
if(b%i==0){
    if(a%i==0){
        console.log(i);
        return
    }
}
    
}
}
commonDiv(15,5)
commonDiv(2154,458)