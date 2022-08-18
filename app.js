const inputName = document.getElementById("input-card-name")
const cardName = document.getElementById("front-card-name")
const inputNumber = document.getElementById("input-card-number")
const cardNumber = document.getElementById("front-card-number")
const inputMonth = document.getElementById("input-month")
const cardMonth = document.getElementById("front-card-month")
const inputYear = document.getElementById("input-year")
const cardYear = document.getElementById("front-card-year")
const inputCvv = document.getElementById("input-cvv")
const cardCvv = document.getElementById("back-card-cvv")

inputName.addEventListener("keyup", function (e) {
    cardName.innerHTML = e.target.value
})

inputNumber.addEventListener("keyup", function (e) {
    if (
        inputNumber.value.length == 4 ||
        inputNumber.value.length == 9 ||
        inputNumber.value.length == 14
      ) {
        inputNumber.value += " ";
      }
    cardNumber.innerHTML = e.target.value
})

inputMonth.addEventListener("keyup", function (e) {
    this.value = this.value.replace(/[^\d]/, '') //only numbers
    cardMonth.innerHTML = e.target.value
})

inputYear.addEventListener("keyup", function (e) {
    this.value = this.value.replace(/[^\d]/, '') //only numbers
    cardYear.innerHTML = e.target.value
})

inputCvv.addEventListener("keyup", function (e) {
    this.value = this.value.replace(/[^\d]/, '') //only numbers
    cardCvv.innerHTML = e.target.value
})

