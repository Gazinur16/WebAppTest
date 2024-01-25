let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("first_name").style.display = "block";
});
