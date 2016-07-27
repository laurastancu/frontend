window.onload = function(){
  var errors=0;
  // Verif the register fields 
  document.getElementById("registerButton").onclick = function(){
    errors=registerValidation();
    if (errors==0){
      //SUBMIT
    }
    else {
      //verif data again
      registerValidation();
    }
  }
}

function registerValidation(){
  // initialize register data
  var countErrors = 0;
  var username = document.forms['registerForm']['rUsername'].value; 
  var pass= document.forms['registerForm']['rPass'].value;
  var pass2 = document.forms['registerForm']['rPass2'].value;
  var fname = document.forms['registerForm']['rFname'].value;
  var lname = document.forms['registerForm']['rLname'].value;
  var email = document.forms['registerForm']['Email'].value;
  var country = document.forms['registerForm']['Country'].value;
  var age = document.forms['registerForm']['Age'].value;
  
  //verif username
  if (verifString(username)!='') {
    document.getElementById("rUsername").innerHTML=verifString(username,'Username');
    document.getElementById("rU").style.border="solid 2px red";
    countErrors++;
  }
  else {
    //erase error after validation
    document.getElementById("rUsername").innerHTML='';
    document.getElementById("rU").style.border="";
  }
  //verif password if equal
  if (comparePass(pass,pass2)!=''){
    document.getElementById("rPass").innerHTML=comparePass(pass,pass2);
    document.getElementById("rPass2").innerHTML='';
    document.getElementById("rP").style.border="solid 2px red";
    document.getElementById("rP2").style.border="solid 2px red";
    countErrors++;
  } else {
    //verif password length
    if (verifString(pass)!='') {
      document.getElementById("rPass").innerHTML=verifString(pass,'Password');
      document.getElementById("rP").style.border="solid 2px red";
      countErrors++;
      }
    if (verifString(pass2)!='') {
      document.getElementById("rPass2").innerHTML=verifString(pass2,'Password');
      document.getElementById("rP2").style.border="solid 2px red";
      countErrors++;
      }
  }
  //erase error
  if ((comparePass(pass,pass2)=='')&&(verifString(pass)=='')){
      document.getElementById("rPass").innerHTML="";
      document.getElementById("rP").style.border="";
      document.getElementById("rPass2").innerHTML="";
      document.getElementById("rP2").style.border="";
  }
  //verif mail
  if (!verifEmail(email)){
      document.getElementById("Email").innerHTML='E-mail is not valid';
      document.getElementById("rE").style.border="solid 2px red";
      countErrors++;
  }
  else {
      // erase error
      document.getElementById("Email").innerHTML='';
      document.getElementById("rE").style.border="";
  }
  return countErrors;
}


function verifString(string , field){
var msg='';
  if (!field){
  field='';
  }
  if (string.length==0) {
    msg='This field is mandatory';
  }
  else if(string.length<8) {
    msg= field + ' must have at lest 8 characters';
  }
  return msg;
}

function comparePass(string1,string2){
  if (string1!==string2){
    return 'password aren\'t equal';
  }
  return '';
}

function verifEmail(mail){
  var atpos = mail.indexOf("@");
  var dotpos = mail.lastIndexOf(".");

  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
        return false;
    }
  return true;
}
