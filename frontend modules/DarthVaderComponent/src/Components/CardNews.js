class CardNews extends HTMLElement {
    
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<p>bruno gay</p>";
    }

}

customElements.define('card-news', CardNews)