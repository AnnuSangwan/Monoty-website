function toggleChatbot() {
    let chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
    } else {
        chatbot.style.display = 'none';
    }
}

function sendMessage() {
    let inputField = document.getElementById('userInput');
    let message = inputField.value.trim();

    if (message === '') return;

    let messagesDiv = document.getElementById('messages');

    // User message
    let userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = message;
    messagesDiv.appendChild(userMessage);

    // Clear input field
    inputField.value = '';

    // Bot response (simple hardcoded response for now)
    let botResponse = document.createElement('p');
    botResponse.className = 'bot-message';
    botResponse.textContent = getBotResponse(message);
    messagesDiv.appendChild(botResponse);

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(message) {
    // Simple bot logic for demonstration
    message = message.toLowerCase();
    if (message.includes('hello')) {
        return "Hello! How can I help you today?";
    } else if (message.includes('services')) {
        return "We offer various services such as Service 1, Service 2, and Service 3.";
    } else if (message.includes('contact')) {
        return "You can contact us via the form above, or send an email to contact@website.com.";
    } else {
        return "I'm not sure how to respond to that. Could you please clarify?";
    }
}
