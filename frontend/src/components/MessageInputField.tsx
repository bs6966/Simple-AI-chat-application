import React, { useState, ChangeEvent } from 'react';

interface MessageInputFieldProps {
  sendMessage: (message: string) => void;
}

const MessageInputField: React.FC<MessageInputFieldProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      try {
        const userMessage = message;

        const response = await fetch('http://localhost:3001/api/messages/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: userMessage }),
        });

        if (response.ok) {
          const data = await response.text();
          setBotResponse(data);
          sendMessage(userMessage);
        } else {
          throw new Error('Network response was not OK.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }

      setMessage('');
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-l-lg border border-gray-400 focus:outline-none focus:border-blue-500 bg-gray-100"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Send
      </button>
      {botResponse && (
        <div className="flex-1 p-2 rounded-lg border border-gray-400 bg-gray-100 mt-2">
          <p className="text-blue-500">User: {message}</p>
          <p className="text-green-500">Bot: {botResponse}</p>
        </div>
      )}
    </div>
  );
};

export default MessageInputField;
