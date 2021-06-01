'useStrict';
let $ = (el) => document.querySelector(el);

let minutes = $('#minutes');
let sec = 60,
  min,
  input,
  myInterval;

function startMinCountdown() {
  input = minutes.value * 60;
  myInterval = setInterval(() => {
    if (input === 0) {
      clearInterval(myInterval);
      $('#time').innerHTML = '00:00';
      return;
    }
    sec -= 1;
    input -= 1;
    if (sec == 0) {
      sec = 59;
    }
    if (input % 60 === 0) {
      min = input / 60;
    } else {
      min = Math.floor(input / 60);
    }

    $('#time').innerHTML = `${min < 10 ? `0${min}` : min}: ${
      sec < 10 ? `0${sec}` : sec
    }`;
  }, 1000);
}

function pauseMinCountdown() {
  clearInterval(myInterval);
}

function restartMinCountdown() {
  window.location.reload();
}
