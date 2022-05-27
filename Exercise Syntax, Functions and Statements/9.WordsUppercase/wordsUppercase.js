function convertUpperCase(string){
    let regex= /\w+/g;
let result=string.match(regex);
result=result.join(', ')
result=result.toLocaleUpperCase().trim();
console.log(result);
}
convertUpperCase('Functions in JS can be nested, i.e. hold other functions')
 convertUpperCase('Hi, how are you?')
 convertUpperCase('hello')