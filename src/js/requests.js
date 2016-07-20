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
      console.log(responseOb);
      showNews(responseOb);
      }
  }

XMLHttp.open("GET", "../js/response.json");
XMLHttp.send();
}
function showNews(news){
  var i=0;
  // var theNews = "";
  
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var theNews = template({"news": news});
  // for (var i in news) {
  // theNews += template(news[i]);
  // console.log(news[i]);
  // }
  
  $(".newsContainer").html(theNews);
  //console.log(template(sampleResponse));
}
