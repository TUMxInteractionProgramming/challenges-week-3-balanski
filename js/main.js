console.log('app is alive');

function switchChannel(channelName, newLocation){

console.log('Tuning into channel '+ channelName);
document.getElementById("currentThread").innerHTML=channelName + ' by' + newLocation;


}