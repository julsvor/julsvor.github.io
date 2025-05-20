



const fixedMessageDiv = document.querySelector('.fixed-message')
const fixedMessageText = document.querySelector('.fixed-message-text')





function displayMessage(msg) {
    // fixedMessageText.style
    fixedMessageText.textContent = msg
}

displayMessage('hello world')