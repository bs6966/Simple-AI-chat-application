import React, { ReactNode } from 'react';

interface ChatWindowProps {
  children: ReactNode;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  );
};

export default ChatWindow;