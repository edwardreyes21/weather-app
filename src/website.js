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
    const footer = document.querySelector('.footer');

    const footer_text = document.createElement('h1');
    footer_text.classList.add("footer-text");
    footer_text.textContent = "Made by Edward";

    footer.appendChild(footer_text);
}

export {initializeHeader, initializeContent, initializeFooter};