const formInputs = document.querySelectorAll('form div span');
const showMessage = document.querySelector('.message');
const rangeValues = document.querySelectorAll('input[type=range]');

const messages = {
  media: 'Sua sensi é média',
  rapida: 'Sua sensi é rápida',
  lenta: 'Sua sensi é lenta',
};
const pixels = Math.sqrt(window.outerHeight ** 2 + window.screen.width ** 2);

function changeMessage() {
  // rangeValues[0].value > 85 && (showMessage.innerHTML = messages.rapida);
  // rangeValues[0].value <= 85 && (showMessage.innerHTML = messages.media);
  var dpi_x = document.getElementById('dpi').offsetWidth;
  var dpi_y = document.getElementById('dpi').offsetHeight;
  rangeValues[0].value && (showMessage.innerHTML = `dpi_y ${dpi_y}, dpy_x ${dpi_x}, scren W ${screen.width}, H ${screen.height}`);
}


changeMessage();

rangeValues.forEach((rangeValue, index) => {
  formInputs[index].innerHTML = rangeValue.value;

  rangeValue.addEventListener('input', (e) => {
    formInputs[index].innerHTML = e.target.value;
    changeMessage();
  });
});

function myFunction() {
  var dpi_x = document.getElementById('dpi').offsetWidth;
  var dpi_y = document.getElementById('dpi').offsetHeight;
  var width = screen.width / dpi_x;
  var height = screen.height / dpi_y;
  console.log('Width: ' + dpi_y, dpi_x);

  console.log({ width, height });
}
myFunction();
console.log(rangeValues);
console.log(window);
// screen.width + pixels / (pixels * 0.0104)