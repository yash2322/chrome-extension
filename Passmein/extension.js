$(document).ready(function (){
    
    console.log(window.location.href);
    chrome.tabs.getSelected(null,function(tab) {
    var tablink = tab.url;
        var title=tab.title;
        console.log(tablink);
        console.log(title);
        document.getElementById("tle").innerHTML=title;
});
    
    $(".btn-options").click(function () {
        $(".btn-options").removeClass("active");
        $(this).addClass("active");
    });
    $("#email-button").click(function () {
        $("#text").text("Email");
        $("#input-field").attr("placeholder", "yash@gmail.com");
    });
    $("#phone-button").click(function () {
        $("#text").text("Mobile Number");
        $("#input-field").attr("placeholder", "950xxxxxxx");
    });
    
    $("#submit").click(function(){
        $("#submit").css("background-color"," #dd2233")
        $("#submit").css("color","#fefefe")
        $("#submit").text("Request Send")

        var counter = 5;
        var interval = setInterval(function() {
            $("#count_down").text("Please wait "+counter+"s");
            counter--;
        if (counter == 0) {

               clearInterval(interval);
               $("#submit").text("Send Again")
               $("#count_down").text("Trouble Logging in? 'try using Phone Number' or 'send again'");

               $("#bar_count").css("width",)
              counter=10;             
        }
}, 1000);
        
        var notification_obj={
            type:'basic',
            iconUrl:'./image/final logo2.png',
            title:'PASSMEIN',
            message:"A push notification has been successfully send at your registered mobile"
        };
        chrome.notifications.create('pushNotif',notification_obj);

        
    });
   $("#login").click(function(){
       var user=document.getElementById("input-field").value;
       var pass=document.getElementById("input-field").value;
       if(user=="useryash2322@gmail.com"){
    window.location.href="./afterlogin.html"
    chrome.browserAction.setPopup({    
        popup:"afterlogin.html"
    });
    }
    else{
        setTimeout(() => {
            $("#error-text").css("display","block")
        }, 5000);
    }
   });

});
