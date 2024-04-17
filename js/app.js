var menu=document.getElementById("menu");
var mnav=document.getElementById("mnav");
var close=document.getElementById("close");
menu.addEventListener("click",function(){
    mnav.style.display="block";
});
close.addEventListener("click",function(){
    mnav.style.display="none";
});