const timerH = document.querySelector('h1');

let timeSecond = 10;

displayTime(timeSecond);

const countdown = setInterval (()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <=0 || timeSecond < 1)
    {
        endTime();
        clearInterval(countdown);
    }
}, 1000);

function displayTime(second)
{
    const min = Math.floor(second / 60);
    const sec = Math.floor(second%60);
    timerH.innerHTML =`${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`;
}

function endTime()
{
    timerH.innerHTML = 'Time out';
}