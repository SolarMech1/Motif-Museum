// Variables
const homeLink = document.getElementsByClassName('navBarLinkHome');
const aboutLink = document.getElementsByClassName('navBarLinkAbout');

const iframe = document.getElementById('homeScreenIframe'); // assuming the iframe has this ID
const iframePath = iframe.contentWindow.location.pathname;

//checks for home page
if (window.location.pathname == "/index.html") {
    for (let i = 0; i < homeLink.length; i++) {
        homeLink[i].classList.add("navBarLinkActive");
        aboutLink[i].classList.remove("navBarLinkActive");
    }
}

//checks for about page
if (window.location.pathname == "/about.html") {
    for (let i = 0; i < aboutLink.length; i++) {
        aboutLink[i].classList.add("navBarLinkActive");
        homeLink[i].classList.remove("navBarLinkActive");
    }
}


//checks for home page and about page on iframe
function checkIframePathname() {
    const iframePath = iframe.contentWindow.location.pathname;

    if (iframePath === "/index.html") {
        for (let i = 0; i < homeLink.length; i++) {
            homeLink[i].classList.add("navBarLinkActive");
            aboutLink[i].classList.remove("navBarLinkActive");
        }
    }

    if (iframePath === "/about.html") {
        for (let i = 0; i < aboutLink.length; i++) {
            aboutLink[i].classList.add("navBarLinkActive");
            homeLink[i].classList.remove("navBarLinkActive");
        }
    }
}
// Wait until the iframe is fully loaded before checking
iframe.onload = checkIframePathname;

