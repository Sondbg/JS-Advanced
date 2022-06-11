const {expect}=require('chai');
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}





describe('Testing RGB to HEX converter',function (){
    it ('happy path 1',function (){
        expect(rgbToHexColor(100,0,250)).to.equal('#6400FA');
    });
    it ('happy path 2',function (){
        expect(rgbToHexColor(0,0,250)).to.equal('#0000FA');
    });
    it ('happy path 3',function (){
        expect(rgbToHexColor(255,0,0)).to.equal('#FF0000');
    });
    it ('invalid input type',function (){
        expect(rgbToHexColor(100,'string',0)).to.equal(undefined);
    });
    it ('invalid range',function (){
        expect(rgbToHexColor(100,256,0)).to.equal(undefined);
    });
    it ('invalid range',function (){
        expect(rgbToHexColor(100,-100,0)).to.equal(undefined);
    });
    it ('invalid range',function (){
        expect(rgbToHexColor(100,[100],0)).to.equal(undefined);
    });
    it ('invalid range',function (){
        expect(rgbToHexColor(100,{100:0},0)).to.equal(undefined);
    });
    it ('number as string',function (){
        expect(rgbToHexColor(255,'0',0)).to.equal(undefined);
    });
    it ('number as string',function (){
        expect(rgbToHexColor(255,0)).to.equal(undefined);
    });
    it ('number as string',function (){
        expect(rgbToHexColor()).to.be.undefined;
    });
    it ('number as string',function (){
        expect(rgbToHexColor(3.14,0.15,5.09)).to.equal(undefined);
    });
})
