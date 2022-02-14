
const back = document.querySelector("#back"),
    next = document.querySelector("#next"),
    boxesRows = document.querySelector(".boxes-rows"),
    max = document.querySelectorAll(".slide").length - 3;

let count = 0;

function slideFunc() {
    if (count < max) {
        count += 3;
        boxesRows.style.paddingRight = 500 * count + "px";
    } else {
        count = 0;
        boxesRows.style.paddingRight = 500 * count + "px";
    }
}

let timer = setInterval(slideFunc, 3000);

boxesRows.addEventListener("mouseover", () => {
    clearTimeout(timer);
})

boxesRows.addEventListener("mouseout", () => {
    timer = setInterval(slideFunc, 3000);
})

next.addEventListener("click", () => {
    slideFunc();
})

next.addEventListener("mouseout", () => {
    timer = setInterval(slideFunc, 3000);
})

next.addEventListener("mouseover", () => {
    clearTimeout(timer);
})

back.addEventListener("click", () => {
    if (count > 0) {
        count -= 3;
        boxesRows.style.paddingRight = 500 * count + "px";
    }
})

back.addEventListener("mouseout", () => {
    timer = setInterval(slideFunc, 3000);
})

back.addEventListener("mouseover", () => {
    clearTimeout(timer);
})



