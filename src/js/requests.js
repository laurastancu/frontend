
$(document).ready(function () {
  if (window.location.pathname === "/html/index.html") {
    getNews();
    getCategories();
    getEvents();
  } else if (window.location.pathname === "/html/details.html") {
    checkNewsId();  
    getCategories();
    getEvents();
    getMiniNews();
    getMiniEvents();
    getMoreAbout();
  }
});

function getNews() {
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showNews(response);
      } 
  }

  doRequest("../js/response.json", successFn);

// var XMLHttp = new XMLHttpRequest();
// var startDate = (new Date).getTime();

//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       var responseOb = JSON.parse(XMLHttp.responseText);
//       showNews(responseOb);
//       }
//   }
//   XMLHttp.open("GET","../js/response.json");
//   XMLHttp.send();
}

function doRequest(url, successFn, method, data, dataType) {
  if (url !== undefined) {
    $.ajax({

      url: url,
      method: method || "GET",
      data: data || {},
      dataType: dataType || "json",
      success: successFn || function () {},
      crossDomain: true,
      headers: { 
        'Content-Type': 'application/json' 
      },
      // beforeSend: function (jqXHR, settings) {
      //   console.log(settings);
      // }
      // success: function(response, textStatus, jqXHR) {},
      // complete: function(jqXHR, textStatus) {},
      // error: function(jqXHR, textStatus, errorThrown ) {}
    });
  }
}

function showNews(news){
  placeTemplate("#entry-template", ".newsContainer", {"news": news});
}


function getCategories(){
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showCategories(response);
      } 
  }

  doRequest("../js/categories.json", successFn);

// var XMLHttp = new XMLHttpRequest();

//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       var categ= JSON.parse(XMLHttp.responseText);
//       showCategories(categ);
//       }
//   }

//   XMLHttp.open("GET","../js/categories.json");
//   XMLHttp.send();  
  

}
function showCategories(categories){
  placeTemplate("#sideMenu-categories",".category-container",categories);
}





function getEvents(){
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showEvents(response);
      } 
  }

  doRequest("../js/events.json", successFn);

// var XMLHttp = new XMLHttpRequest();

//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       var events= JSON.parse(XMLHttp.responseText);
//       showEvents(events);
//       }
//   }
//   XMLHttp.open("GET","../js/events.json");
//   XMLHttp.send();
}
function showEvents(events){
  placeTemplate("#sideMenu-events",".events-container",{"events":events});
}




function checkNewsId() {
  var theId = getParameterByName("id");
  if (theId === false) {
    location.href = "/html/index.html";
  } else {
    getNewsById(theId);
  }
}
function getNewsById(id){
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showDetails(response);
      } 
  }


  doRequest("../js/news.json?id="+id, successFn);

  // var XMLHttp = new XMLHttpRequest();

  //   XMLHttp.onreadystatechange = function() {
  //   if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
  //     var news= JSON.parse(XMLHttp.responseText);
  //      showDetails(news);
  //     }
  // }

  // XMLHttp.open("GET","../js/news.json?id="+id);
  // XMLHttp.send();  
}
function showDetails(theNews){
   placeTemplate("#detailsPage-template",".theNews",{"news":theNews});
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

function placeTemplate (templateSelector, containerSelector, detailsObj) {
  var source = $(templateSelector).html();
  var template = Handlebars.compile(source);

  var theNews = template(detailsObj);
  $(containerSelector).html(theNews);
}

function getFirstThree(myArray){
  var resultArray = [] ;
  var i = 0;
  for (i=0;i<3;i++){
    resultArray[i]= myArray[i];
  }
  return resultArray;
}
function getMiniNews() {
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showMiniNews(getFirstThree(response));
      } 
  }

  doRequest("../js/response.json", successFn);

// var XMLHttp = new XMLHttpRequest();
// var startDate = (new Date).getTime();
// var resultArray=[];
//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       resultArray = getFirstThree(JSON.parse(XMLHttp.responseText));
//       showMiniNews(resultArray);
//       }
//   }
//   XMLHttp.open("GET","../js/response.json");
//   XMLHttp.send();
}
function showMiniNews(news){
  placeTemplate("#miniNews-template", ".row", {"news": news});
}





function getMiniEvents(){
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showMiniEvents(getFirstThree(response));
      } 
  }

  doRequest("../js/events.json", successFn);

// var XMLHttp = new XMLHttpRequest();
// var resultArray = [];
//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       resultArray = getFirstThree(JSON.parse(XMLHttp.responseText));
//       showMiniEvents(resultArray);     
//        }
//   }
//   XMLHttp.open("GET","../js/events.json");
//   XMLHttp.send();
}
function showMiniEvents(events){
  placeTemplate("#miniEvents-template", ".secondrow", {"event": events});
}





function getMoreAbout(){
  var successFn = function (response, textStatus, jqXHR) {
    if (jqXHR.readyState == 4 && jqXHR.status == 200) {
        showMoreAbout(response);
      } 
  }

  doRequest("../js/moreAbout.json", successFn);

// var XMLHttp = new XMLHttpRequest();
// var resultArray = [];
//     XMLHttp.onreadystatechange = function() {
//     if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
//       showMoreAbout(JSON.parse(XMLHttp.responseText));     
//       }
//   }
//   XMLHttp.open("GET","../js/moreAbout.json");
//   XMLHttp.send();
}

function showMoreAbout(about){
  placeTemplate("#moreAbout-template", ".newsLeftColumn", {"about": about});
}




// Location filters
function checkNewsLocation() {
  var theLocation = getParameterByName("location");
  if (theLocation === false) {
    location.href = "/html/index.html";
  } else {
    getNewsByLocation(theLocation);
  }
}
function getNewsByLocation(location){
  var XMLHttp = new XMLHttpRequest();

    XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      var locationFilter= JSON.parse(XMLHttp.responseText);
       showDetails(news);
      }
  }

  XMLHttp.open("GET","../js/news.json?location="+location);
  XMLHttp.send();  
}
function showDetails(theNews){
   placeTemplate("#detailsPage-template",".theNews",{"news":theNews});
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

function placeTemplate (templateSelector, containerSelector, detailsObj) {
  var source = $(templateSelector).html();
  var template = Handlebars.compile(source);

  var theNews = template(detailsObj);
  $(containerSelector).html(theNews);
}
// End of location filters
