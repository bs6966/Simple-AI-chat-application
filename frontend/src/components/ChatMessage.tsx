import React from 'react';

interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { text, sender, timestamp } = message;
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
        <p className="text-sm">{text}</p>
        <span className="text-xs text-gray-500">{new Date(timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default ChatMessage;