function initializeHeader() {
    const header = document.querySelector('.header');
    
    const header_text = document.createElement('h1');
    header_text.classList.add("header-text");
    header_text.textContent = "Weather App";

    header.appendChild(header_text);
}

function initializeContent() {

}

function initializeFooter() {

}

export {initializeHeader, initializeContent, initializeFooter};