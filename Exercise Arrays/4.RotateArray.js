function rotateRight(arr,n){
for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop())
}
console.log(arr.join(' '));
}
rotateRight(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)
rotateRight(['1', 
'2', 
'3', 
'4'], 
2
)