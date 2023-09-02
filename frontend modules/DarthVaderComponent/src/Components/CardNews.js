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
        const linkTitle = document.createElement("a");
        const paragraph = document.createElement("p");

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(paragraph);
        // right card
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        
        // appending left an righ cards to componentRoot (father div) and  returning
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style() {

    }
}
customElements.define("card-news", CardNews)