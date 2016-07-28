var url="http://172.16.226.18:8080/";
window.onload = function(){
  $(document).on("click", "#registerButton", function (e) {
      registerValidation();
    })
  $(document).on("click", "#loginFormButton", function (e) {
      loginValidation();
    })
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
  
  //if valid is ok create user
  if(countErrors==0) {
    var userData = new User(username,pass,fname,lname,email,country,age);
    
    var userDataJson= JSON.stringify(userData);
    
    insertUserData(userDataJson);
  }
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

function insertUserData(user){
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
      if (response.error !== undefined) {
        alert(response.error);
      } else {
        console.log(response);  
      }
    } 
  }

  doRequest(url + 'auth/users', successFn, "POST", user);
}

function User(username,pass,fname,lname,email,country,age){
  this.userName= username;
  this.password= md5(pass);
  this.firstName= fname;
  this.lastName= lname;
  this.email= email;
  this.country= country;
  this.age= age;
}

function loginValidation(){
  countErrors=0;
  var loginUsername = document.forms['loginForm']['username'].value; 
  var loginPass= md5(document.forms['loginForm']['pass'].value);
  console.log(loginUsername);
  if ((loginUsername.length < 8)||(loginPass.length<8)){
    document.getElementById("loginError").innerHTML='Wrong username or password';
    countErrors++;
  }
  if (countErrors==0){
     var successFn = function (response, textStatus, jqXHR) {
      if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        if (response.error !== undefined) {
          alert(response.error);
        } else {
          console.log(response);  
        }
      } 
    }
  }
  
  var user = {
    userName : loginUsername,
    password : loginPass
  }
  userJson = JSON.stringify(user);
  
  doRequest(url + 'auth/authenticate ', successFn, "POST", userJson);
}
