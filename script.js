const blockedContent = document.querySelector('main');
const unBlockcontent = document.getElementById('unblockButton');
const currentDPI = document.getElementById('current-dpi');

window.onload = ()=>{
  currentDPI.textContent = screen.width - 1;
}

unBlockcontent.addEventListener('click', ()=>{
  blockedContent.removeAttribute('hidden')
})
