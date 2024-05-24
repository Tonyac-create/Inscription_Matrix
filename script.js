const blueButton = document.getElementById("blueButton")
const redButton = document.getElementById("redButton")
const messageBlue = document.getElementById("messageBlue")
const messageRed = document.getElementById("messageRed")
const section = document.getElementById("section")
const main = document.getElementById("main")
const mainRed = document.getElementById("mainRed")
const inputName = document.getElementById("surname")
const handleSubmitBlue = (e) => {
    e.preventDefault()
    if (document.getElementById('myForm').checkValidity()) {
        section.classList.toggle("displayAnimation")
        messageBlue.classList.toggle("displayMessageEnd")
    } else {
        document.getElementById('myForm').reportValidity();
    }
}

blueButton.addEventListener("click", handleSubmitBlue);

const handleSubmitRed = (e) => {
    e.preventDefault()
    if (document.getElementById('myForm').checkValidity()) {
        main.classList.toggle("displayAnimation")
        mainRed.classList.toggle("displayMainRedButton")
        messageRed.classList.toggle("displayMessageEndRed")
    } else {
        document.getElementById('myForm').reportValidity();
    }
}

redButton.addEventListener("click", handleSubmitRed)

const handleName = () => {
    const name = inputName.value
    messageBlue.textContent = `"Tu n’es qu’un esclave ${name}, comme tous les autres tu es né enchaîné. Le monde est une prison où il n’y a ni espoir ni odeur ni saveur. Une prison pour ton esprit."`
    messageRed.textContent = `Welcome to the Real World, ${name}`
}