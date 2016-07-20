
$(document).ready(function () {
  getNews();
});

function getNews() {
var XMLHttp = new XMLHttpRequest();
var startDate = (new Date).getTime();

    XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      var responseOb= JSON.parse(XMLHttp.responseText);
      // showNews(response);
      
      showNews(responseOb);
      }
  }

XMLHttp.open("GET","../js/response.json");
XMLHttp.send();
}
function showNews(news){
  
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var theNews = template(news);

  $(".newsContainer").html(theNews);
}
