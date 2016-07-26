$(document).ready(function(){
    $(document).on("click", "#close", function (e) {
      $(".newsLeftColumn").css('display','none');

    }).on("click", "#showMore", function (e) {
      $(".newsLeftColumn").css('display','block');

    }).on("click", "#showLogInDiv", function (e) {
      $("#logInDiv").show();
      $("#registerDiv").hide();
      
    }).on("click", "#showRegisterDiv", function (e) {
      $("#logInDiv").hide();
      $("#registerDiv").show();
    });
});
