function prevDay(year,month,day){
let date= new Date(year,month-1,day)
date.setDate(day-1)
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
prevDay(2016, 9, 30)
prevDay(2016, 10, 1)