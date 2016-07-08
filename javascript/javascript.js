$(document).ready(function(){
    $("#showRegisterDiv").click(function(){
        $("#logInDiv").hide();
        $("#registerDiv").show();
    });
});

$(document).ready(function(){
    $("#showLogInDiv").click(function(){
        $("#logInDiv").show();
        $("#registerDiv").hide();
    });
});