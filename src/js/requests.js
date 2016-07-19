$(document).ready(function () {
  //getNews();
  showNews();
});

var url = 'http://172.16.226.36:8080/';
var response= {"news":[
  {"datetime":"29.07.2034","id":"1","title":"first news","subtitle":"This is the first news in object",
  "description":"sadasdas dsadasdas dasd asdasdasdasdasd dsadasd","authors":"sadfadfs","categories":"movie", "source":"www.goagal.ro",
  "body":"sadasdasddasd asdasdasdas sad as das dasd  sadas news conteeeeeeeeeeeeeeeeeeeeeeeeent asdsa dasdasdad asdsadas","image_id":"image id","thumbnail_id":"stringgg","external_url":"external url","location":"craiova"},
  {"datetime":"28.07.2034","id":"2","title":"second news","subtitle":"This is the first news in object",
  "description":"sadasdas dsadasdas dasd asdasdasdasdasd dsadasd","authors":"sadfadfs","categories":"movie", "source":"www.goagal.ro",
  "body":"sadasdasddasd asdasdasdas sad as das dasd  sadas news conteeeeeeeeeeeeeeeeeeeeeeeeent asdsa dasdasdad asdsadas","image_id":"image id","thumbnail_id":"stringgg","external_url":"external url","location":"brasov"},
  {"datetime":"27.07.2034","id":"3","title":"third news","subtitle":"This is the first news in object",
  "description":"sadasdas dsadasdas dasd asdasdasdasdasd dsadasd","authors":"sadfadfs","categories":"movie", "source":"www.goagal.ro",
  "body":"sadasdasddasd asdasdasdas sad as das dasd  sadas news conteeeeeeeeeeeeeeeeeeeeeeeeent asdsa dasdasdad asdsadas","image_id":"image id","thumbnail_id":"stringgg","external_url":"external url","location":"craiova"}
]}

// function getNews() {
// var XMLHttp = new XMLHttpRequest();
// var startDate=(new Date).getTime();

//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       var response= JSON.parse(responsej);
//       console.log(response);
//       showNews(response);
//       }
//   }

// XMLHttp.open("GET", url + "webapp/news?startDate=" + startDate, true);
// XMLHttp.send();
// }

function getNews(){
  showNews(response);
}
function showNews(news){
   console.log("aaaa");

   var sampleResponse = [
     {
      "news_title": "test title1",
      "news_body": "test body"
     },
     {
      "news_title": "test title2",
      "news_body": "test body"
     },
     {
      "news_title": "test title3",
      "news_body": "test body"
     },
     {
      "news_title": "test title4",
      "news_body": "test body"
     },
   ];

  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var theNews = "";
  for (var i in sampleResponse) {
    theNews += "<div>" + sampleResponse[i].news_title + "</div>";
  }
  $(".newsContainer").html(theNews);


  //console.log(template(sampleResponse));


// Show news in index.html
function showNews(news) {
  var newsLocation = document.getElementsByClassName('newsContainer');
 for (var key in news) {
      console.log(news[key]);
      //newsLocation[i].innerHtml =  '';
  }

}
