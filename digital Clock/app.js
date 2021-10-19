
function showTime(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  let session ="AM";
   if( hour > 12){
   session ="PM";
   hour -= 12;
}



  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  sec = sec < 10 ? '0' + sec : sec;

   let time = hour + ":" + minutes + ":" + sec +" " +session;
   document.querySelector("#myTime").innerText = time;

   setTimeout(showTime, 1000);
}
showTime();
