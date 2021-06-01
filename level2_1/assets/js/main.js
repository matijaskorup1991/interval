'useStrict';
let $ = (el) => document.querySelector(el);

(() => {
  let counter = 10;
  let myInterval = setInterval(() => {
    $('#count').innerHTML = counter;

    counter--;
    if (counter < 0) {
      clearInterval(myInterval);
      $('.message').style.display = 'none';
    }
  }, 1000);
})();
