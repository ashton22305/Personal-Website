// This script creates the navbar and automatically inserts it into an element with the id 'navbar'

function createNavbar() {
    const html = '\
        <nav id="navbar"> \
            <a href="./index.html">Home</a> \
            <a href="./projects.html">Projects</a> \
            <a href="https://github.com/ashton22305/" class="push">Github</a> \
            <a href="#">Test</a> \
        </nav>';
    const navdiv = document.getElementById("navbar");
    navdiv.innerHTML = html;
}

window.addEventListener("load", createNavbar);