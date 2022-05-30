function lastNum(length,k){
    let result=[1];
for (let index = 1; index < length; index++) {
    let stop=(index-k)<0?0:index-k;
    result[index]=0;
   for (; stop < index; stop++) {
       result[index]+=result[stop];
       
   }
    
}
return result
}
lastNum(6,3)
lastNum(8,2)