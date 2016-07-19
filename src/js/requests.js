var url = 'http://172.16.226.36:8080/';
function getNews(){
var XMLHttp = new XMLHttpRequest();
var startDate=(new Date).getTime();
    XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      var response= JSON.parse(XMLHttp.responseText);
      console.log(response);
      showNews(response);
    } else {
var newsRequest = new XMLHttpRequest();

function getNews() {
    newsRequest.onreadystatechange = function() {
    if (newsRequest.readyState==4&&newsRequest.status==200) {
      document.getElementsByClassName('newsDesc').innerHTML = newsRequest.responseText;
      console.log('You made it');
    } else{
      document.getElementsByClassName('newsDesc').innerHTML = "Waiting For Server Response... ";
      console.log('It`s pending...');
    } 
  }
    } 
  };
  
  XMLHttp.open("GET", url + "webapp/news?startDate=" + startDate, true);
  XMLHttp.send();
}
function showNews(news){
   
}
