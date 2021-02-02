var minute  = document.getElementById('min')
var second  = document.getElementById('sec')
var millisec  = document.getElementById('millisec')
var milli = 0
var sec = 0
var min = 0 
var stop;

function start(){
    milli++
    if(milli < 100){
        millisec.innerHTML = milli
    }
    else if(milli > 100){
        sec++
        second.innerHTML = sec
        milli = 0
    }
    else if(sec === 60){
        min++
        minute.innerHTML = min
        sec = 0
    }



}
var startBtn = document.getElementById('startBtn')
 
function timeStart(){
    stop = setInterval(start,10)
    startBtn.disabled = true
}

function pausedTime(){
    clearInterval(stop)
    startBtn.disabled = false
}

function reset(){
    clearInterval(stop)
    min = 0
    sec = 0
    milli = 0
    millisec.innerHTML = milli
    second.innerHTML = sec
    minute.innerHTML = min
    startBtn.disabled = false

}
