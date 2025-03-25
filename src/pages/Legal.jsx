import React from "react";

const Legal = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Legal</h2>

      <div style={styles.section}>
        <h3>1. Legal Notice</h3>
        <p>
          This page provides legal information regarding the use of our platform. Please read it carefully.
        </p>
      </div>

      <div style={styles.section}>
        <h3>2. Liability Disclaimer</h3>
        <ul>
          <li>We are not responsible for user-generated content.</li>
          <li>Users are responsible for their own actions on the platform.</li>
          <li>We strive to provide accurate information but cannot guarantee 100% accuracy.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>3. Intellectual Property</h3>
        <ul>
          <li>All content on this platform is protected by copyright laws.</li>
          <li>Users may not copy, reproduce, or distribute content without permission.</li>
          <li>Trademarks and logos belong to their respective owners.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>4. Governing Law</h3>
        <ul>
          <li>These terms are governed by applicable local and international laws.</li>
          <li>Any legal disputes must be settled in accordance with jurisdictional laws.</li>
          <li>Users agree to comply with all relevant regulations.</li>
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

export default Legal;