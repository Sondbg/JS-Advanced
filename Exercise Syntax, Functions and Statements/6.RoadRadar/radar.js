function radar(speed,zone){
let speedLimit=0;
let status='';
switch (zone) {
    case 'motorway':
        speedLimit=130;
        break;
    case 'interstate':
        speedLimit=90;
        break;
    case 'city':
        speedLimit=50;
        break;
    case 'residential':
        speedLimit=20;
        break;
    default:
        break;
}
if(speedLimit>=speed){
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    return;
}else if((speed-speedLimit)>40){
   status='reckless driving';
}else if((speed-speedLimit)>20){
    status='excessive speeding';
}else{
    status='speeding';
}
console.log(`The speed is ${speed-speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}
radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')