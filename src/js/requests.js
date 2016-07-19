var url = 'http://172.16.226.33:8080/';

function getNews() {
var XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      document.getElementsByClassName('newsDesc').innerHTML = XMLHttp.responseText;
      console.log('You made it!');
    } else {
        document.getElementsByClassName('newsDesc').innerHTML = "Waiting For Server Response... ";
        console.log('dasdasdas');
    } 
  };
  XMLHttp.open("GET", url + "webapp/news", true);
  XMLHttp.send();
}
function show2(){
    document.getElementsByClassName('content').innerHTML='asdasdasd';
}
