let btn = document.getElementById('click-nav');
let ul_hide = document.querySelector('ul');

btn.addEventListener("click", function(){
   ul_hide.classList.toggle("active");
})