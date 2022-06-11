const {expect}=require('chai');
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}






describe('Testing the Happy path',function (){

    it ('testing the addFnc and GetFNC Happy Path',function (){
        var test=createCalculator()
            test.add(10);
            test.subtract(5);
            expect(test.get()).to.equal(5)
    });
    it ('testing the string Number Happy Path',function (){
        var test=createCalculator()
            test.add('10');
            test.subtract('5');
            expect(test.get()).to.equal(5)
    });
    it ('testing the addFnc and GetFNC Happy Path',function (){
        var test=createCalculator()
            test.add(0);
            test.subtract(5);
            expect(test.get()).to.equal(-5)
    });
    it ('string cant be parsed',function (){
        var test=createCalculator();
        test.add('dani');
        expect(test.get()).to.be.NaN;
    });
    it ('value cant be changed',function (){
        var test=createCalculator();
             expect(test.value+=1).to.be.NaN;
    });
    it ('functions',function (){
        var test=createCalculator();
             expect(typeof test.add).to.equal('function');
             expect(typeof test.subtract).to.equal('function');
             expect(typeof test.get).to.equal('function');
    });
    it ('object',function (){
        var test=createCalculator();
             expect(typeof test).to.equal('object')
    });
    it ('value cant be changed',function (){
        var test=createCalculator();
             expect(test.value).to.be.undefined;
    });
})

