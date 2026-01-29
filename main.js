const conversation = document.getElementById('conversation');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText === '') {
        return;
    }

    appendMessage(userText, 'user-message');
    userInput.value = '';

    // Bot "pong" response
    setTimeout(() => {
        appendMessage(userText, 'bot-message');
    }, 500);
}

function appendMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = text;
    conversation.appendChild(messageElement);
    conversation.scrollTop = conversation.scrollHeight;
}