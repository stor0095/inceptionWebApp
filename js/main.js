// Geemakun Storey - Mobile Web App

"use strict";
document.addEventListener("DOMContentLoaded", init);

function init(ev){
  //when page is ready add event listeners to every object as needed
  //add listeners to buttons
  var pl = document.querySelectorAll(".page-link");
  [].forEach.call(pl, function(obj, index){
     var navTap = new Hammer(obj);
      navTap.on('tap', navigate);
  });
  //add listeners to pages
    
 var pages = document.querySelectorAll("[data-role=page]");
  [].forEach.call(pages, function(obj, index){
    obj.className = "inactive-page";
    if(index==0){
      obj.className = "active-page";
    }
    //transitionend or animationend listeners
    obj.addEventListener("animationend", pageAnimated);
  });
    // HAMMER JS FOR ROTTEN TOMATOES LINK
    var rottenLink = document.querySelector(".webLink");
    var rottenFunc = new Hammer(rottenLink);
    rottenFunc.on('tap', function(ev){
        // Alert the user that they are leaving the site
    var confirmMessage = "You are being taken to Rotten Tomatoes";
    var go = "http://www.rottentomatoes.com/m/inception/";
    if (alert(confirmMessage)){
        window.location = go;
    } 
    });
}
function navigate(ev){
  ev.preventDefault();
  var btn = ev.target;
  var href = btn.href;
  var id = href.split("#")[1];
  //history.pushState();
  var pages = document.querySelectorAll('[data-role="page"]');
  for(var p=0; p<pages.length; p++){
    if(pages[p].id === id){
      pages[p].classList.remove("hidden");
        pages[p].className = "active-page";
    }else{
      if(pages[p].className !== "inactive-page"){
        pages[p].className = "inactive-page";
      }
    }
  }
}
function pageAnimated(ev){
var page = ev.target;
  if( page.className == "active-page" ){
    console.log(ev.target.id, " has just appeared");
  }
}
