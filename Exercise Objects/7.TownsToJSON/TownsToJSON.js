function toJSON(inputArr){
    let result=[];
    class Ctown{
        constructor(town,Latitude,Longitude) {
            this.Town=town,
            this.Latitude=Number(Latitude),
            this.Longitude=Number(Longitude)
        }
    }

for (let index = 1; index < inputArr.length; index++) {
    let arr=inputArr[index].split('|').map(a=>a.trim()).filter(x=>x.length>0);
    let [town,latitude,longtitude]=arr;
    latitude=Number(latitude).toFixed(2);
    longtitude=Number(longtitude).toFixed(2);
let city=new Ctown(town.trim(),Number(latitude),Number(longtitude));

    result.push(city);
}
console.log(JSON.stringify(result));
}
toJSON(['| Town | Longitude | Latitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']

)