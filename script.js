let [hours,minutes,seconds,miliseconds] = [00,00,00,00];
let timer=document.getElementById("timer");
let time=null;

function stopwatch(){
    miliseconds++;
    if(miliseconds==100){
    miliseconds=0;    
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }}
    let h=hours<10 ? "0" + hours : hours;
    let m=minutes<10 ? "0" + minutes : minutes;
    let s=seconds<10 ? "0" + seconds : seconds;
    let ms=miliseconds<10 ? "0" + miliseconds: miliseconds;
    timer.innerHTML=h + ":"+ m + ":" + s + ":" + ms;
}

function watchstart(){
    if(time != null){
        clearInterval(time);}

    time=setInterval(stopwatch,10);
}
function watchstop(){
    clearInterval(time);
}
function watchreset(){
    clearInterval(time);
    [hours,minutes,seconds] = [00,00,00,00];
    timer.innerHTML="00:00:00:00";
}