let open_nav = document.getElementById('openNav');
let open_width = document.getElementById('mySide');
let close_nav = document.getElementById('close-btn')

open_nav.addEventListener("click", function(){
   open_width.style.width="250px";
});

close_nav.addEventListener("click", function(){
   open_width.style.width="0px";
});