$(document).ready(function (){
   $("#logout").click(function(){
    window.location.href="./popup.html"
    chrome.browserAction.setPopup({    
        popup:"popup.html"
    });
   });
   $("#1").click(function(){
       $(this).children(".collapse").toggle();
   })
   $("#2").click(function(){
    $(this).find(".collapse").toggle();
})
$("#3").click(function(){
    $(this).find(".collapse").toggle();
})
});

