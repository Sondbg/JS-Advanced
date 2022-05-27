function travelTime(steps,stepLength,speedKMH){
let speedMPS=speedKMH/3.6
let distance=steps*stepLength;
let breakMinutes=Math.floor((distance/500));
let hours=Math.floor((distance/speedMPS)/3600);
let minutes=Math.floor((distance/speedMPS)/60)+breakMinutes
let seconds=Math.round((distance/speedMPS)%60);
hours<10? hours='0'+hours:'';
minutes<10?minutes='0'+minutes:'';
seconds<10?seconds='0'+seconds:'';
console.log(`${hours}:${minutes}:${seconds}`);
}
travelTime(4000, 0.60, 5)
travelTime(2564, 0.70, 5.5)