const stress = document.querySelector(".stressBarComplete")
const input = 0
const maxValue = document.querySelector(".maxValueInput")
let finalValue = 0
let max = 0

maxValue.addEventListener("keyup", function() {
    max = parseInt(maxValue.value, 10)
    console.log("max", max)
})

