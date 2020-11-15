window.onload = function(){
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let msecs = 0;

  let appendHours = document.getElementById('hours');
  let appendMinutes = document.getElementById('minutes');
  let appendSeconds = document.getElementById('seconds');
  let appendMsecs = document.getElementById('msecs');

  let start = document.getElementById('playButton');
  let pause = document.getElementById('pauseButton');
  let reset = document.getElementById('resetButton');
  let Interval;

  start.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    document.getElementById('playButton').style.display = 'START';
  };

  pause.onclick = function(){
    clearInterval(Interval);
    let p = document.getElementById('playButton');
    if (p.style.display === 'START'){
      document.getElementById('playButton').innerHTML = 'RESUME';
      p.style.display = '';
    } else{
      p.style.display = '';
    }
  };

  reset.onclick = function(){
    clearInterval(Interval);
    hours = '00';
    minutes = '00';
    seconds = '00';
    msecs = '00';    
    document.getElementById('playButton').innerHTML = 'START';
    appendMsecs.innerHTML = msecs;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  };

  function startTimer(){
    msecs++;
    appendMsecs.innerHTML = msecs;

    if (msecs > 99){
      console.log('seconds');
      seconds++;
      appendSeconds.innerHTML = seconds;
      mSecs = 0;
      if (seconds < 10){
        appendSeconds.innerHTML = '0' + seconds;
      } else{
        appendSeconds.innerHTML = seconds;
      }
    };
    if (seconds >= 60){
      seconds = '0' + 0;
      minutes++;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
      if (minutes < 10){
        appendMinutes.innerHTML = '0' + minutes;
      } else {
        appendMinutes.innerHTML = minutes;
      }
    };
    if (minutes >= 60){
      minutes = '0' + 0;
      hours++;
      appendMinutes.innerHTML = minutes;
      appendHours.innerHTML = hours;
    }
  }
};