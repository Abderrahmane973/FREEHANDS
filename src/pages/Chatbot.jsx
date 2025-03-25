import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
      {isOpen && (
        <div style={{
          width: "300px",
          height: "400px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          padding: "10px"
        }}>
          <p>Bienvenue ! Comment puis-je vous aider ?</p>
          {/* Ici tu peux ajouter une vraie logique de chatbot */}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        💬
      </button>
    </div>
  );
}

export default Chatbot;

