class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        // apending the result from build and style methods
        shadow.appendChild(this.build());
        
    }

    build() {
        const componentRoot = document.createElement("div");
        // setting the attribute class and card value - <div class="card">
        componentRoot.setAttribute("class", "card");

        // left card   
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        
        const author = document.createElement("span");
        author.textContent = (this.getAttribute("author") || "Anonymous author") // prop name on html
       
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title") // prop name on html
        linkTitle.href = this.getAttribute("link-url") // prop name on html
       
        const paragraph = document.createElement("p");
        paragraph.textContent = this.getAttribute("content") // prop name on html

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(paragraph);

        // right card
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);

        newsImage.src = this.getAttribute("src");
        newsImage.alt = this.getAttribute("alt")
        
        // appending left an righ cards to componentRoot (father div) and  returning
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        
        // returning root 
        return componentRoot;
    }

    style() {

    }
}
customElements.define("card-news", CardNews)