const {expect}=require('chai');
function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}




describe('Testing the input',function (){
    it ('should be working',function (){
        expect(isSymmetric([1,2,5])).to.be.false;
    });
    it ('should be working',function (){
        expect(isSymmetric([1,2,1])).to.be.true;
    });
    it ('should be working',function (){
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });
    it ('symmtrical 1 element',()=> {
        expect(isSymmetric([1])).to.be.true;
    });
    it ('symmtrical 4 elements',()=> {
        expect(isSymmetric([1,2,2,1])).to.be.true
    });
    it ('symmtrical with strings',()=> {
        expect(isSymmetric(['a','b','b','a'])).to.be.true
    });
    it ('string',function (){
        expect(isSymmetric('stringInput')).to.be.false
    });
    it ('object',()=> {
        expect(isSymmetric({1:1,2:2})).to.be.false
    })
})
