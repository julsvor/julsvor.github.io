



const fixedMessageDiv = document.querySelector('.fixed-message')
const fixedMessageText = document.querySelector('.fixed-message-text')

const buyButtons = document.querySelectorAll('.buy-button')


var shown = false

function displayMessage(msg) {
    if (!shown) {
        shown = true
        fixedMessageDiv.style.display = 'block'
        fixedMessageText.textContent = 'This product is out of stock'
        setTimeout(()=>{
            fixedMessageDiv.style.display = 'none'
            shown = false
        }, 5000)
    }
}


buyButtons.forEach(element => {
    element.addEventListener('click', displayMessage)
})
