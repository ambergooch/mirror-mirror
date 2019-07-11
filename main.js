const inputBox = document.querySelector("#message")

const outputBoxes = document.querySelectorAll(".output")

for (let i = 0; i < outputBoxes.length; i++) {
    inputBox.addEventListener("keyup", function () {
        outputBoxes[i].textContent = inputBox.value
    })
}