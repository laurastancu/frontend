var url = 'http://172.16.226.36:8080/';
newsRequest = new XMLHttpRequest();

function getNews() {
    newsRequest.onreadystatechange = function() {
    if (newsRequest.readyState==4&&newsRequest.status==200) {
      document.getElementsByClass('newsDesc').innerHTML = newsRequest.responseText;
      console.log('You made it');
    } else{
      document.getElementsByClass('newsDesc').innerHTML = "Waiting For Server Response... ";
      console.log('It`s pending...');
    } 
  }

  newsRequest.open("GET", "http://172.16.226.36:8080/webapp/news", true);
  newsRequest.send();
}
