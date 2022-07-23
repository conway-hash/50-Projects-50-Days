const ps5 = document.querySelector(".PS5");
const xbx = document.querySelector(".XBX");

ps5.addEventListener("mouseenter", active);
xbx.addEventListener("mouseenter", active);
ps5.addEventListener("mouseleave", inactive);
xbx.addEventListener("mouseleave", inactive);

function active(e) {
    e.target.classList.add("active")
};

function inactive(e) {
    e.target.classList.remove("active")
};
