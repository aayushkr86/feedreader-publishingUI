

document.addEventListener("DOMContentLoaded", function(){
    var feedTitle = document.querySelectorAll(".feedTitle");
    var extLink = document.querySelectorAll(".extLink");
    
    // for NodeJS section
    req1 = new XMLHttpRequest();
    req1.open("GET", "http://localhost:4000/feeds/published/nodejs", true);
    req1.send();
    req1.onload = function(){
        var json = JSON.parse(req1.response);
        console.log(json);
        for(var i = 0; i < 3; i++){
            feedTitle[i].textContent = json[i].title;
            extLink[i].setAttribute("href", json[i].link);

        }
    }     

    // for Devops section

    req2 = new XMLHttpRequest();
    req2.open("GET", "http://localhost:4000/feeds/published/devops", true);
    req2.send();
    req2.onload = function(){
        var json = JSON.parse(req2.response);
        console.log(json);
        for(var i = 3; i < 6; i++){
            feedTitle[i].textContent = json[i - 3].title;
            extLink[i].setAttribute("href", json[i - 3].link);
        }
    }
    
    
    
    
    
    
    
    
    let yearElement = document.querySelector("#year");
    yearElement.innerHTML = (new Date()).getFullYear();
});





