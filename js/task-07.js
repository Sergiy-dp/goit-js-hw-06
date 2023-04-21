
const input = document.getElementById("font-size-control");
const text = document.getElementById('text');

const fontSize = input.value=16;


input.addEventListener('input', handleInputChange);

function handleInputChange() {
   const fontSize = input.value + 'px';
   text.style.fontSize = fontSize;

}