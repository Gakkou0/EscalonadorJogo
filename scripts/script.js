// const stress = document.querySelector(".stressBarComplete")
// const input = 0
// const maxValue = document.querySelector(".maxValueInput")
// let finalValue = 0
// let max = 0

// maxValue.addEventListener("keyup", function() {
//     max = parseInt(maxValue.value, 10)
//     console.log("max", max)
// })

const mongoose = require('mongoose')
const userSchema = require('/schema/user')
const mongoServer = require('/connection')

function newRegistration(){
    userSchema.create({
        name: document.getElementById("nameValue"),
        userName: document.getElementById("userNameValue"),
        email: document.getElementById("emailValue"),
        password: document.getElementById("passwordValue"),
        matchesCampaingMode: 0,
        matchesSurvivalMode: 0,
        survivalHighScore: 0
    }).save()
}

