function addRemove(arr){
let result=[];
let temp=0;
for (let index = 0; index < arr.length; index++) {
   temp++
    if(arr[index]==='add'){
result.push(temp);
    }else{
result.pop()
    }
    
}
console.log(result[0]!=undefined?result.join('\n'):'Empty');
}
addRemove(['remove', 
'remove', 
'remove']


)