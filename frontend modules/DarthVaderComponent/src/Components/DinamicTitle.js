class DinamicTitle extends HTMLElement {
    constructor() {
        super();
        // creating open shadow
        const shadow = this.attachShadow({mode: "open"});
        // component base - same as <h1> content </h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("title") // defining prop
        // component style
        const style = document.createElement("style");
        style.textContent = `
            h1  {
                color: red;
            }
        `
        // send to shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('dinamic-title', DinamicTitle)