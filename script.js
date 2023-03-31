const blockedContent = document.querySelector('main');
const unBlockcontent = document.getElementById('unblockButton');
const sendContent = document.getElementById('submit');
const currentDPI = document.getElementById('current-dpi');
const sensiInputs = document.querySelectorAll('input[type=range]');
const questionInput = document.querySelectorAll('.question input[checked]');
const sensiInputsValues = document.querySelectorAll('.sensi-value');
const batteryStatus = document.getElementById('battery');
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
sendContent.addEventListener('click', () => {
  onSubmit();
});
unBlockcontent.addEventListener('click', () => {
  blockedContent.removeAttribute('hidden');
});

function generateSENSI() {
  if (!!questionInput[0].value === true && !!questionInput[1] != true) {
    const newSensi = () => Math.floor(Math.random() * sensiInputs[0].value);
    let currentSensi = newSensi();
    if (currentSensi < sensiInputs[0].value - 8) {
      return generateSENSI();
    }
    console.log('gerada', currentSensi);
    console.log('atual', sensiInputs[0].value);
    return;
  }
  console.log(questionInput);
}

function onSubmit() {
  generateSENSI();
}
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;
  batteryStatus.innerHTML = `
    ${battery.level}
   tempo carregando ${battery.chargingTime}
    carregando ${battery.charging}
  `;
  console.log(battery);
  battery.addEventListener('chargingchange', () => {
    batteryIsCharging = battery.charging;
  });
});

