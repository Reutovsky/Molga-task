document.addEventListener("DOMContentLoaded", startStopwatch);

function startStopwatch () {
    var timer = 0;
    document.getElementById('startButton').addEventListener('click', function () {
        timer = new Date().getTime();
    });
    document.getElementById('stopButton').addEventListener('click', function () {
        timer = 0;
    });

    setInterval(function(){
        if (timer !== 0) document.getElementById('stopWatch').innerHTML = (new Date().getTime()-timer)/1000;
        return;
    },100);
}

