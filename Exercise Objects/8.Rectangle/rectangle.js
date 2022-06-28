    function rectangle(a,b,c){
        c=c.split('');
        c[0]=c[0].toUpperCase();
        c=c.join('')
        let obj={
            width:a,
            height:b,
            color:c,
            calcArea(){
                return this.width*this.height
            }
        }
        return obj
    }
    let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
