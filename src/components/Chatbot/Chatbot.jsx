import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your travel assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const travelResponses = {
    greeting: [
      "Hello! How can I assist you with your travel plans today?",
      "Hi there! What would you like to know about our travel services?",
      "Welcome! I'm here to help you plan your perfect trip."
    ],
    destinations: [
      "We offer amazing destinations including India, South Korea, China, Japan, Russia, and New Zealand!",
      "Our top destinations are India (₹85,000), China (₹1,20,000), and Russia (₹1,25,000).",
      "Each destination has unique experiences. Would you like to know more about any specific place?"
    ],
    booking: [
      "You can book your trip by clicking the 'Book Now' button on any destination card.",
      "Our booking process is simple: select your destination, choose dates, and fill in your details.",
      "Need help with booking? I can guide you through the process step by step."
    ],
    pricing: [
      "Our prices start from ₹85,000 for India and go up to ₹1,40,000 for New Zealand.",
      "Prices vary based on the destination and season. Would you like specific pricing details?",
      "We offer competitive prices and great value for money. Check our destination cards for starting prices."
    ],
    default: [
      "I'm not sure I understand. Could you please rephrase your question?",
      "I'm still learning about travel queries. Could you ask something about our destinations or booking process?",
      "I can help you with information about our destinations, booking process, or pricing. What would you like to know?"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return travelResponses.greeting[Math.floor(Math.random() * travelResponses.greeting.length)];
    }
    else if (message.includes('destination') || message.includes('place') || message.includes('where')) {
      return travelResponses.destinations[Math.floor(Math.random() * travelResponses.destinations.length)];
    }
    else if (message.includes('book') || message.includes('reservation') || message.includes('ticket')) {
      return travelResponses.booking[Math.floor(Math.random() * travelResponses.booking.length)];
    }
    else if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return travelResponses.pricing[Math.floor(Math.random() * travelResponses.pricing.length)];
    }
    else {
      return travelResponses.default[Math.floor(Math.random() * travelResponses.default.length)];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      setMessages(prev => [...prev, { text: input, isBot: false }]);
      
      // Get and add bot response
      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      }, 500);
      
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-button" onClick={() => setIsOpen(true)}>
          <span>💬</span>
          <span>Chat with us</span>
        </button>
      )}
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Travel Assistant</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 