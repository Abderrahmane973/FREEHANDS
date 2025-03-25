import React from "react";

const Privacypolicy = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Privacy & Policy</h2>

      <div style={styles.section}>
        <h3>1. Introduction</h3>
        <p>
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
      </div>

      <div style={styles.section}>
        <h3>2. Information We Collect</h3>
        <ul>
          <li>Personal details such as name, email, and contact information.</li>
          <li>Usage data including pages visited and interactions.</li>
          <li>Payment details for secure transactions.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>To improve our services and user experience.</li>
          <li>To process transactions securely.</li>
          <li>To communicate important updates and support.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>4. Data Protection</h3>
        <ul>
          <li>We implement security measures to protect your data.</li>
          <li>Your information is not shared with third parties without consent.</li>
          <li>You can request data deletion at any time.</li>
        </ul>
      </div>
    </div>
  );
};

// Styles en React (inline)
const styles = {
  container: {
    width: "80%",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#0066cc",
    marginBottom: "20px",
  },
  section: {
    background: "#f9f9f9",
    padding: "15px",
    marginBottom: "15px",
    borderLeft: "5px solid #0066cc",
    borderRadius: "5px",
  },
};

export default Privacypolicy;