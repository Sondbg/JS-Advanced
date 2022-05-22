function dayOfWeek(day){
let week=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
console.log(week.indexOf(day)!=-1?week.indexOf(day)+1:'error');
}
dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('dfgay')