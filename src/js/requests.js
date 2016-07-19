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

    } 
  };
  
  XMLHttp.open("GET", url + "webapp/news?startDate=" + startDate, true);
  XMLHttp.send();
}
function showNews(news){
   
}
