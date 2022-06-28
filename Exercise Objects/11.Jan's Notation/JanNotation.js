    function notation(inputArr){
    let numbers=[];
    let operators=[];
    for (let index = 0; index < inputArr.length; index++) {
        let a=inputArr[index];
        if(a==Number(a)){
            numbers.push(a);
        }else{
            operators.push(a);
            if(numbers[numbers.length-2]==undefined){
                console.log('Error: not enough operands!');
                return 
            }else{
                let num1=numbers[numbers.length-2];
                let num2=numbers[numbers.length-1];
                let operator=inputArr[index];
                numbers.splice(numbers.length-2,2,(result(num1,num2,operator)));  
            }
        }
    }

    if(numbers.length>1){
        console.log(`Error: too many operands!`);
        return
    }
    console.log(numbers[0]);
    function result(a,b,oper){
        switch (oper) {
            case '+': return a+b;
                break;
            case '-': return a-b;
                break;
            case '*': return a*b;
                break;
            case '/': return a/b;
                break;
            default:
                break;
        }
    }
    }
notation([31,2,'+',11,'/']
   
   )
   notation([7,
    33,
    8,
    '-']
   )
   notation([3,
    4,
    '+']
   
   
   )