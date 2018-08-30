function redirect2steam() {
    window.location = "https://store.steampowered.com/login/";
}

function redirect2home(num) {
    if(num) {
        window.location = "../index.html";
    }
    else window.location = "./index.html";
}

function redirect2affiliates(num) {
    if(num) {
        window.location = "./affiliates.html";
    }
    else window.location = "./dest/affiliates.html";
}

function redirect2faq(num) {
    if(num) {
        window.location = "./FAQ.html";
    }
    else window.location = "./dest/FAQ.html";
}

function redirect2provably(num) {
    if(num) {
        window.location = "./provably.html";
    }
    else window.location = "./dest/provably.html";
}

function redirect2support(num) {
    if(num) {
        window.location = "./support.html";
    }
    else window.location = "./dest/support.html";
}

function redirect2tos(num) {
    if(num) {
        window.location = "./tos.html";
    }
    else window.location = "./dest/tos.html";
}