

document.addEventListener("DOMContentLoaded", function(){
    var feedTitle = document.querySelectorAll(".feedTitle");
    
    
    // for NodeJS section
    req = new XMLHttpRequest();
    req.open("GET", "http://localhost:4000/feeds/archived/nodejs", true);
    req.send();
    req.onload = function(){
        json = JSON.parse(req.response);
        console.log(json);
        for(var i = 0; i < 3; i++){
            feedTitle[i].textContent = json[i].title;
            feedTitle[i].
        }
    }     
    
    
    
    
    
    
    
    
    let yearElement = document.querySelector("#year");
    yearElement.innerHTML = (new Date()).getFullYear();
});





