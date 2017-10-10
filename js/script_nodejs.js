var req = new XMLHttpRequest();
req.open("GET", "http://localhost:4000/feeds/published/nodejs", true);
req.send();
req.onload = function(){
    json = JSON.parse(req.response);
    var len = json.length;
    for(var i = 0; i < len; i++){
        if(len > 0){
            var cardDiv = document.createElement("div");
            cardDiv.className = "col-md-4 col-sm-4 hero feature";
            
            var cardHyperlink = cardDiv.appendChild(document.createElement("a"));
            cardHyperlink.setAttribute("class", "extLink");
            cardHyperlink.setAttribute("target", "_blank");
            cardHyperlink.setAttribute("href", json[i].link);
            var thumbNail = document.createElement("div");
            thumbNail.setAttribute("class", "thumbnail thumbnail-jumbotron hero");
            
            cardHyperlink.appendChild(thumbNail);
            
            var cardImage = document.createElement("img");
            cardImage.setAttribute("src", "./images/nodeweekly.png");
            
            thumbNail.appendChild(cardImage);
            
            var caption = document.createElement("div");
            caption.setAttribute("class", "caption");
            thumbNail.appendChild(caption);
            
            var feedTitle = document.createElement("h3");
            feedTitle.setAttribute("class", "feedTitle");
            feedTitle.textContent = json[i].title;
            caption.appendChild(feedTitle);
            
            // appending to outer card container
            var cardContainer = document.querySelector(".cardContainer");
            cardContainer.appendChild(cardDiv);
        }     
    }

}


