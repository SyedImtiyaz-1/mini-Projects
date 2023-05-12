let btn = document.getElementById('click-nav');
let ul_hide = document.querySelector('ul');
let li_hide = document.querySelector('li-nav');

btn.addEventListener("click", function(){
   ul_hide.classList.toggle("active");
   li_hide.classList.toggle("active");
})