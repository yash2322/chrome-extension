$(document).ready(function (){
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
   
});