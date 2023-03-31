const blockedContent = document.querySelector('main');
const unBlockcontent = document.getElementById('unblockButton');
const currentDPI = document.getElementById('current-dpi');
const sensiInputs = document.querySelectorAll('input[type=range]');
const sensiInputsValues = document.querySelectorAll('.sensi-value');

window.onload = () => {
  currentDPI.textContent = screen.width - 1;
  handleInputValue();
};

function changeValueSensi(value, position) {
  sensiInputsValues[position].innerHTML = value;
}

function handleInputValue() {
  sensiInputs.forEach((sensiInput, index) => {
    changeValueSensi(sensiInput.value, index);
    sensiInput.addEventListener('input', (e) => {
      changeValueSensi(e.target.value, index);
    });
  });
}

unBlockcontent.addEventListener('click', () => {
  blockedContent.removeAttribute('hidden');
});
