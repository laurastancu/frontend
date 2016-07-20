
$(document).ready(function () {
  if (window.location.pathname === "/html/index.html") {
    getNews();
  } else if (window.location.pathname === "/html/details.html") {
    checkNewsId();  
  }
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
  placeTemplate("#entry-template", ".newsContainer", {"news": news});
}

function placeTemplate (templateSelector, containerSelector, detailsObj) {
  var source = $(templateSelector).html();
  var template = Handlebars.compile(source);

  var theNews = template(detailsObj);
  $(containerSelector).html(theNews);
}

function checkNewsId() {
  var theId = getParameterByName("id");
  if (theId === false) {
    location.href = "/html/index.html";
  } else {
    console.log("retriving the news details for: ", theId);

    //placeTemplate("#ewqe", ".wqeqe", news);
  }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return false;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
