// Existing Code (Old JavaScript)
document.addEventListener('DOMContentLoaded', function() {
    // Example of your existing JavaScript logic, if any.
    console.log("Website loaded and ready!");
    
    // Example: Handling a button click to show an alert
    const exampleButton = document.querySelector('.example-btn');
    if (exampleButton) {
        exampleButton.addEventListener('click', function() {
            alert("Button clicked!");
        });
    }
});

// Chatbot Code (Newly Added)

// Function to toggle the chatbot visibility
function toggleChat() {
    const chatbotBox = document.getElementById('chatbot-box');
    chatbotBox.classList.toggle('show');
}

// Function to handle user input in the chatbot
function handleInput(event) {
    const chatContent = document.getElementById('chatContent');
    const chatInput = document.getElementById('chatInput');

    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        const userMessage = chatInput.value.trim();
        
        // Append user message
        const userMessageElement = document.createElement('p');
        userMessageElement.classList.add('user-message');
        userMessageElement.textContent = userMessage;
        chatContent.appendChild(userMessageElement);

        chatInput.value = '';  // Clear input field

        // Simulate a response from the chatbot
        setTimeout(() => {
            const botMessageElement = document.createElement('p');
            botMessageElement.classList.add('bot-message');
            botMessageElement.textContent = getBotResponse(userMessage);

            chatContent.appendChild(botMessageElement);
            chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom
        }, 1000);
    }
}

// Function to get bot response based on user input
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Define some basic responses related to hotel room booking
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        return "Hello! Welcome to our hotel. How can I assist you today?";
    } else if (lowerCaseMessage.includes("book a room") || lowerCaseMessage.includes("reserve a room")) {
        return "Sure! What type of room would you like to book? We have single, double, and suite options available.";
    } else if (lowerCaseMessage.includes("single room")) {
        return "A single room is available for $100 per night. Would you like to proceed with booking this room?";
    } else if (lowerCaseMessage.includes("double room")) {
        return "Our double rooms are available for $150 per night. Would you like to book one?";
    } else if (lowerCaseMessage.includes("suite")) {
        return "Our suites are available for $250 per night. Would you like to reserve a suite?";
    } else if (lowerCaseMessage.includes("check-in date") || lowerCaseMessage.includes("arrival date")) {
        return "When would you like to check-in? Please provide a date.";
    } else if (lowerCaseMessage.includes("check-out date") || lowerCaseMessage.includes("departure date")) {
        return "When is your planned check-out date?";
    } else if (lowerCaseMessage.includes("availability")) {
        return "Let me check the availability for your requested dates. Can you provide me with the dates you plan to stay?";
    } else if (lowerCaseMessage.includes("facilities") || lowerCaseMessage.includes("amenities")) {
        return "We offer free Wi-Fi, a swimming pool, a gym, and 24/7 room service. Would you like more details on any of these amenities?";
    } else if (lowerCaseMessage.includes("cancellation policy")) {
        return "Our cancellation policy allows free cancellation up to 24 hours before check-in. After that, a one-night charge will apply.";
    } else if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("cost")) {
        return "The price depends on the type of room and the dates of your stay. Could you provide those details so I can give you an accurate quote?";
    } else if (lowerCaseMessage.includes("contact")) {
        return "You can contact us at support@hotel.com for further assistance or call us at +1-800-123-4567.";
    } else if (lowerCaseMessage.includes("goodbye") || lowerCaseMessage.includes("bye")) {
        return "Goodbye! Thank you for considering our hotel. We hope to welcome you soon!";
    } else {
        return "I'm sorry, I didn't quite understand that. Could you please clarify or ask about our rooms, availability, or services?";
    }
}
