



const fixedMessageDiv = document.querySelector('.fixed-message')
const fixedMessageText = document.querySelector('.fixed-message-text')

const buyButtons = document.querySelectorAll('.buy-button')


var shown = false

function displayMessage(msg) {
    if (!shown) {
        shown = true
        fixedMessageDiv.style.display = 'block'
        fixedMessageText.textContent = 'Det är slut på denna varan'
        setTimeout(()=>{
            fixedMessageDiv.style.display = 'none'
            shown = false
        }, 5000)
    }
}


buyButtons.forEach(element => {
    element.addEventListener('click', displayMessage)
})
