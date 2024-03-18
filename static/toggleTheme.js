document.addEventListener("click", toggleTheme())

function toggleTheme() {
    event.preventDefault();
    document.body.className == "light" ? document.body.className = "dark" : document.body.className = "light";
}