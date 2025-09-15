import React, { useState } from "react";

function Inbox() {
  const [messages, setMessages] = useState([
    { from: "Alice", text: "Hi, how are you?" },
    { from: "You", text: "I’m good, thanks!" },
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (newMsg.trim() !== "") {
      setMessages([...messages, { from: "You", text: newMsg }]);
      setNewMsg("");
    }
  };

  return (
    <div className="card">
      <h2>Inbox (Direct Chat)</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}><b>{msg.from}:</b> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Inbox;
