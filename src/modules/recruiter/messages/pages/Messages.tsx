import { useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";

const conversations = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

interface Message {
  sender: string;
  text: string;
}

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Record<number, Message[]>>({});

  const sendMessage = () => {
    if (!message.trim() || selectedChat === null) return;
    setChatHistory((prev) => ({
      ...prev,
      [selectedChat]: [...(prev[selectedChat] || []), { sender: "You", text: message }],
    }));
    setMessage("");
  };

  return (
    <div className="h-[calc(100vh-115px)] flex">
      {/* Desktop: Sidebar selalu tampil */}
      <div className="w-1/4 bg-white p-4 hidden md:block">
        <h2 className="text-lg font-semibold">Chats</h2>
        <ul>
          {conversations.map((chat) => (
            <li
              key={chat.id}
              className={`p-2 cursor-pointer rounded-md ${
                selectedChat === chat.id ? "bg-blue-200" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              {chat.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: Pilih screen antara daftar chat atau percakapan */}
      <div className="flex-1 flex flex-col bg-white shadow-md rounded-lg m-4">
        {/* Mobile: Tampilkan daftar orang jika belum memilih chat */}
        {selectedChat === null ? (
          <div className="block md:hidden">
            <h2 className="text-lg font-semibold p-4 border-b">Select a Chat</h2>
            <ul className="p-4">
              {conversations.map((chat) => (
                <li
                  key={chat.id}
                  className="p-3 cursor-pointer rounded-md hover:bg-gray-200"
                  onClick={() => setSelectedChat(chat.id)}
                >
                  {chat.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Mobile & Desktop: Tampilkan chat screen
          <div className="flex flex-col h-full">
            {/* Header Chat */}
            <div className="p-4 border-b text-lg font-semibold flex items-center">
              {/* Tombol Back untuk Mobile */}
              <button
                className="block md:hidden mr-2"
                onClick={() => setSelectedChat(null)}
              >
                <FaArrowLeft size={20} />
              </button>
              {conversations.find((c) => c.id === selectedChat)?.name}
            </div>

            {/* Daftar Pesan */}
            <div className="flex-1 p-4 overflow-auto min-h-0">
              {chatHistory[selectedChat]?.length ? (
                chatHistory[selectedChat].map((msg, index) => (
                  <div key={index} className={`mb-2 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
                    <span className="inline-block p-2 bg-blue-200 rounded-md max-w-xs">{msg.text}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No messages yet</p>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex items-center">
              <input
                type="text"
                className="flex-1 p-2 border rounded-md"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                onClick={sendMessage}
              >
                <FaPaperPlane size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
