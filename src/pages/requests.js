var url = 'http://172.16.226.33:8080/';

function getNews() {
XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      document.getElementsByClass('newsDesc').innerHTML = XMLHttp.responseText;
      console.log('You made it!');
    } else{
      document.getElementsByClass('newsDesc').innerHTML = "Waiting For Server Response... ";
    } 
  };

  XMLHttp.open("GET", url + "webapp/news", true);
  XMLHttp.send();
}
function show2(){
    document.getElementsByClass('content').innerHTML='asdasdasd';
}
