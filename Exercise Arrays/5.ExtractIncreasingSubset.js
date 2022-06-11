function extractIncrSubset(arr){
    let temp=arr[0];
let result=[temp];


arr.reduce((p,c)=>{
    if(c>=temp){
        result.push(c)
        temp=c;
    }
})
console.log(result)
}
extractIncrSubset([-1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )
    extractIncrSubset([1, 
        2, 
        3,
        4]
        )
        extractIncrSubset([20, 
            3, 
            2, 
            15,
            6, 
            1]
            )