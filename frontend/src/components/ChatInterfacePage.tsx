import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import ChatMessage from './ChatMessage';
import MessageInputField from './MessageInputField';

interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

const ChatInterfacePage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (message: string) => {
    const botResponse: Message = {
      text: `Mock response to: ${message}`,
      sender: 'bot',
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user', timestamp: new Date().toISOString() }, botResponse]);
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-semibold">AI Chat</h1>
      </header>
      <main className="flex-1 overflow-y-auto bg-gray-200 p-4" id="chat-window">
        <ChatWindow>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </ChatWindow>
      </main>
      <footer className="bg-gray-300 p-4">
        <MessageInputField sendMessage={sendMessage} />
      </footer>
    </div>
  );
};

export default ChatInterfacePage;