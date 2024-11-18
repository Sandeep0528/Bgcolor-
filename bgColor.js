let input = document.getElementById("color")
let input2 = document.getElementById("bRadius")
let image = document.querySelector("img")

function colorChange(k) {
    console.log(k)
    if (k.key === "Enter") {
        document.body.style.backgroundColor = input.value
    }
}
function radiusChange(k) {
    if (k.key === "Enter") {
        image.style.borderRadius = `${input2.value}px`
    }
}