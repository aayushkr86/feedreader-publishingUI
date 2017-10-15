

document.addEventListener("DOMContentLoaded", function(){
    var feedTitle = document.querySelectorAll(".feedTitle");
    var extLink = document.querySelectorAll(".extLink");
    var imageRandom = document.querySelectorAll(".imageRandom");
    // for Engineering section

    let req1 = new XMLHttpRequest();
    req1.open("GET", "http://localhost:4000/feeds/published/engineering", true);
    req1.send();
    req1.onload = function(){
        let imageArray = ["./images/Engineering/Engineering1.png","./images/Engineering/Engineering2.jpg", "./images/Engineering/Engineering3.png", "./images/Engineering/Engineering4.png", "./images/Engineering/Engineering5.jpg", "./images/Engineering/Engineering6.jpg", "./images/Engineering/Engineering7.jpg"];
        imageArrayLength = imageArray.length;
        var json = JSON.parse(req1.response);
        console.log(json);
        for(var i = 0; i < 3; i++){
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            feedTitle[i].textContent = json[i].title;
            extLink[i].setAttribute("href", json[i].link);
            imageRandom[i].setAttribute("src", imageArray[imageIndex]);
        }
    }




    // for Design section
    let req2 = new XMLHttpRequest();
    req2.open("GET", "http://localhost:4000/feeds/published/design", true);
    req2.send();
    req2.onload = function(){
        var json = JSON.parse(req2.response);
        console.log(json);
        for(var i = 3; i < 6; i++){
            feedTitle[i].textContent = json[i - 3].title;
            extLink[i].setAttribute("href", json[i - 3].link);

        }
    }     

    // for Nodejs section

    let req3 = new XMLHttpRequest();
    req3.open("GET", "http://localhost:4000/feeds/published/nodejs", true);
    req3.send();
    req3.onload = function(){
        var json = JSON.parse(req3.response);
        console.log(json);
        for(var i = 6; i < 9; i++){
            feedTitle[i].textContent = json[i - 6].title;
            extLink[i].setAttribute("href", json[i - 6].link);
        }
    }
    
    // for Devops section

    let req4 = new XMLHttpRequest();
    req4.open("GET", "http://localhost:4000/feeds/published/devops", true);
    req4.send();
    req4.onload = function(){
        var json = JSON.parse(req4.response);
        console.log(json);
        for(var i = 9; i < 12; i++){
            feedTitle[i].textContent = json[i - 9].title;
            extLink[i].setAttribute("href", json[i - 9].link);
        }
    }
    
    // for Product Management
    
    let req5 = new XMLHttpRequest();
    req5.open("GET", "http://localhost:4000/feeds/published/product", true);
    req5.send();
    req5.onload = function(){
        var json = JSON.parse(req5.response);
        console.log(json);
        for(var i = 12; i < 15; i++){
            feedTitle[i].textContent = json[i - 12].title;
            extLink[i].setAttribute("href", json[i - 12].link);
        }
    }
    
    
    let yearElement = document.querySelector("#year");
    yearElement.innerHTML = (new Date()).getFullYear();
});





