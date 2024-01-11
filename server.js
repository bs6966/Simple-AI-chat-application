const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Simple response algorithm
const generateResponse = (userMessage) => {
  // Predefined responses based on keywords
  const responses = {
    hello: 'Hi there! How can I help you?',
    hi: 'Hello! What can I do for you today?',
    hey: 'Hey! How can I assist you?',
    bye: 'Goodbye! Have a great day.',
    howAreYou: "I'm doing well, thank you for asking!",
    fine: 'I am fine. How about you?',
    notBad: 'Not bad at all!',
    good: 'Good to hear that!',
    bad: 'I hope things get better for you soon.',
    joke: 'Why did the programmer go broke? Because he used up all his cache!',
    tellMeAJoke: 'Sure, here is a joke: Why don’t scientists trust atoms? Because they make up everything!',
    help: 'Sure, I can assist you with that. What do you need help with?',
    assistance: 'I am here to help. What can I do for you?',
    time: `It's time to seize the day!`,
    date: `Today is ${new Date().toLocaleDateString()}.`,
    weather: 'I am an indoor AI, but I hope the weather is pleasant for you!',
    favoriteColor: 'I am not sure about my favorite color, but I like all the colors!',
    age: "I don't have an age. I'm timeless!",
    music: 'I enjoy all kinds of music! What is your favorite genre?',
    movie: 'I love watching movies! What is your favorite movie?',
    book: 'Books are a great source of knowledge. What is your favorite book?',
    food: 'I am a virtual assistant, but I hear pizza is quite popular!',
    learn: 'I am always eager to learn new things. What can you teach me?',
    randomFact: 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!',
    dreamDestination: 'If I could travel, my dream destination would be in the cloud!',
    compliment: 'You are amazing just the way you are!',
    programmingLanguage: 'I speak the language of ones and zeros! But JavaScript is pretty cool too.',
    default: `I'm sorry, I didn't understand that.`,
  };

  // Check if userMessage contains predefined keywords
  for (const keyword in responses) {
    if (userMessage.toLowerCase().includes(keyword)) {
      return responses[keyword];
    }
  }

  // If no keyword is found, return default response
  return responses.default;
};

// API endpoint to receive user input and generate a response
app.post('/api/messages/send', (req, res) => {
  const userMessage = req.body.text;

  // Generate response based on user input
  const botResponse = generateResponse(userMessage);

  // Send the response back to the frontend
  res.json({ botResponse });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});