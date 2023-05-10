const modeBtn = document.getElementById('d-l-mode');
const body = document.getElementsByTagName("body")[0];

modeBtn.addEventListener("click", function(){
    body.classList.toggle('light');
    body.classList.toggle('dark');
})