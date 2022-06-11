const {expect}=require('chai');
function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}



describe('Is it working with array of numbers',function (){
    it ('should be working',function (){
        expect(sum([1,2,5])).to.equal(8,'did not work')
    });
    it ('should throw error',()=> {
        expect(sum([1,2])).to.equal(3)
    })
})