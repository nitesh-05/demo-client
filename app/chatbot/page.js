"use client";
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you?" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("price")) return "Our products start from $99.";

    if (msg.includes("hello")) return "Hello! How can I assist you today?";

    if (msg.includes("order"))
      return "You can place orders directly from our ecommerce store.";

    return "I'm an AI demo bot. Ask me about price, order, or products.";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">AI Chatbot Dashboard</h2>

      <div className="max-w-xxl bg-white rounded-xl shadow p-6">
        {/* Chat window */}

        <div className="h-80 overflow-y-auto border rounded p-4 mb-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="border rounded px-3 py-2 w-full"
            placeholder="Type message..."
          />

          <button
            onClick={sendMessage}
            className="bg-black text-white px-4 rounded hover:bg-gray-800"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
