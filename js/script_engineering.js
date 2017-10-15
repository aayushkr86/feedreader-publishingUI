let req = new XMLHttpRequest();
req.open("GET", "http://localhost:4000/feeds/published/design", true);
req.send();
req.onload = function(){
   let json = JSON.parse(req.response);
    console.log(json);
    let len = json.length;
    for(var i = 0; i < len; i++){
        if(len > 0){
            var cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "col-md-4 col-sm-4 hero-feature");
            
            var cardHyperlink = document.createElement("a");
            cardHyperlink.setAttribute("class", "extLink");
            cardHyperlink.setAttribute("target", "_blank");
            cardHyperlink.setAttribute("href", json[i].link);
            
            var thumbNail = document.createElement("div");
            thumbNail.setAttribute("class", "thumbnail thumbnail-jumbotron hero");
            
            
            
            var cardImage = document.createElement("img");
            cardImage.setAttribute("src", "./images/hero2.png");
            
            
            
            var caption = document.createElement("div");
            caption.setAttribute("class", "caption");
           
            
            var feedTitle = document.createElement("h3");
            feedTitle.setAttribute("class", "feedTitle");
            feedTitle.textContent = json[i].title;
            
            
            // appending to outer card container
            var cardContainer = document.querySelector(".cardContainer");
            cardDiv.appendChild(cardHyperlink);
            thumbNail.appendChild(cardImage);
            thumbNail.appendChild(caption);
            cardHyperlink.appendChild(thumbNail);

            caption.appendChild(feedTitle);
            cardContainer.appendChild(cardDiv);
        }     
    }
}