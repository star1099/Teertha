
let state = 0;
let fontSize = 1.2;

document.getElementById("yesBtn").addEventListener("click", () => {
    const q = document.getElementById("questionText");
    if (state === 0) {
        q.textContent = "Was it really that bad?";
        state = 1;
    } else {
        window.location.href = "sorry.html";
    }
});

document.getElementById("noBtn").addEventListener("click", () => {
    if (state === 0) {
        fontSize *= 1.5;
        document.getElementById("yesBtn").style.fontSize = fontSize + "em";
    } else {
        window.location.href = "sorry.html";
    }
});
