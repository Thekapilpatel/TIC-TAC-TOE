let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let win_display = document.querySelector("h3");

let combinations = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
];

let turnO = true;

box.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turnO ? "O" : "X";
        box.style.pointerEvents = "none";
        turnO = !turnO;
        check_winner();
    });
});

function winner() {
    win_display.innerText = `Winner is "${turnO ? 'X' : 'O'}"`;
    box.forEach(box => box.style.pointerEvents = "none");
}

const check_winner = () => {
    for (let pattern of combinations) {
        let [a, b, c] = pattern;
        if (box[a].innerText && box[a].innerText === box[b].innerText && box[a].innerText === box[c].innerText) {
            winner();
            return;
        }
    }
};

reset.addEventListener("click", () => {
    win_display.innerText = "New Game Begin!";
    box.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    turnO = true;
    win_display.classList.add("blink");
    setTimeout(() => win_display.classList.remove("blink"), 4000);
});
