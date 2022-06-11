function subSum(arr,start,end){
   if(!Array.isArray(arr)){
       return NaN
   }
   if(start<0){
       start=0;
   }
   if(end>arr.length-1){
       end=arr.length-1;
   }
   let result=0;
   for(start; start<=end;start++){
       result+=Number(arr[start]);
   }
  console.log(result);
}
subSum([10, 'twenty', 30, 40], 0, 2)