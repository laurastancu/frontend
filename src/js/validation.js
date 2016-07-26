function registerValidation(){
  var countErrors = 0;
  var username = document.forms['registerForm']['rUsername'].value; 
  var fname = document.forms['registerForm']['rFname'].value;
  var lname = document.forms['registerForm']['rLname'].value;
  var email = document.forms['registerForm']['Email'].value;
  var address = document.forms['registerForm']['Address'].value;
  var occupation = document.forms['registerForm']['Occupation'].value;

  if (username.length<10) {
    document.getElementById("rUsername").innerHTML='errroare';
    return false;
  }

  return true;
}
