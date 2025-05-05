
function querySelect(element) {
    return document.querySelector(element);
}

function querySelectAll(element) {
    return Array.from(document.querySelectorAll(element));
}

function createDecorationCircles() {
    const textBubbles = this.querySelectAll(".text-bubble")
    let horizMod = 'left';
    let vertMod = 'bottom';
    let colorMod = 'black';

    textBubbles.forEach(bubble => {
        const dec = document.createElement("div");
        for (let i = 0; i < 2; ++i){
            switch (Math.floor(Math.random() * 2)) {
                case 0:
                    i > 0 ? horizMod = 'left' : vertMod = 'top';
                    colorMod = 'rgb(100, 250, 230, .3)';
                    break;
                case 1:
                    i > 0 ? horizMod = 'right' : vertMod = 'bottom';
                    colorMod = 'rgb(245, 115, 240, .3)'
                    break;
            }
        }
        dec.className = `decoration-bubble ${horizMod} ${vertMod}`;
        dec.style.backgroundColor = colorMod;
        bubble.appendChild(dec);
    })
}

document.addEventListener('scroll', (e) => {
    const scrollY = cont.scrollTop;

    (document.getElementsByClassName('landing-section')[0]).style.opacity = `${1 - scrollY/150}`;
    (document.getElementsByClassName('scroll-indicator')[0]).style.opacity = `${.5 - 2 * scrollY/150}`;

    if (scrollY < .3 * window.innerHeight) {
        (document.getElementsByClassName('main-page-content')[0]).style.transform = `translate(0px, ${0 - scrollY}px)`;
    }

});

document.addEventListener("DOMContentLoaded", () => {
    createDecorationCircles()
})