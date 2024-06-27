document.getElementById("iconOpen").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("main").classList.add("hidden");
    document.querySelector("header").classList.add("hidden");
    document.getElementById("modal").classList.remove("hidden");
});

document.getElementById("iconClose").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("modal").classList.add("hidden");
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("header").classList.remove("hidden");
});