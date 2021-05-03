const clickMe = document.querySelector(".textBtn");
const close = document.querySelector(".close");
const text = "Let me show you something that powerful stuff forwards <3 ";
let index = 0;

clickMe.addEventListener("click", function() {
    showText();
    this.style.opacity = "0";
    close.style.display = "block";
})
function showText() {
    const text = "Let me show you something that powerful stuff forwards <3 ";
    let i = 0;

    setInterval(function() {
        document.body.innerHTML = text.slice(0, i);
        i++;
        if (i > text.length){
            i = 0;
        }
        console.log(text)
    },100)   
}

init();
function init() {
    setInterval(createHeart, 300);
}
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = " 💛 ";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


