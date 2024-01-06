const timerElement = document.getElementById('timer');

const startElement = document.getElementById('start');

const stopElement = document.getElementById('stop');

const resetElement = document.getElementById('reset');

let startTime = 0;

let elapseTime = 0;

let timeInterval;

function startTimer(){
  startTime = Date.now() - elapseTime;

  timeInterval = setInterval(() =>{
  elapseTime = Date.now() - startTime;

  timerElement.textContent = formatTime(elapseTime);
  },10)

  startElement.disabled = true;
  stopElement.disabled = false;
}

function formatTime(elapseTime){

  const milliseconds = Math.floor((elapseTime % 1000) / 10);

  const seconds = Math.floor((elapseTime % (1000 * 60) / 1000));

  const minutes = Math.floor((elapseTime % (1000 * 60 * 60) / (1000 * 60)));

  const hours = Math.floor(elapseTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00")

    + "." +

    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")

    + "." +

    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")

    + "." +

    (milliseconds > 9 ? milliseconds : "0" + milliseconds )
  );
}

function stopTimer(){
  clearInterval(timeInterval);
  startElement.disabled = false;
  stopElement.disabled= true
}

function resetTimer(){
  clearInterval(timeInterval);
  elapseTime = 0;
  timerElement.textContent = "00:00:00";
  startElement.disabled = false;
  stopElement.disabled= true
}

startElement.addEventListener('click', startTimer)
stopElement.addEventListener('click', stopTimer)
resetElement.addEventListener('click', resetTimer)