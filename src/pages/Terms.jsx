import React from "react";

const Terms = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}> Terms & Conditions</h2>

      <div style={styles.section}>
        <h3>1. Introduction</h3>
        <p>
          Welcome to our platform! By using our services, you agree to comply
          with our terms and conditions. Please read them carefully.
        </p>
      </div>

      <div style={styles.section}>
        <h3>2. User Responsibilities</h3>
        <ul>
          <li> You must be at least 18 years old to use this site.</li>
          <li> You are responsible for maintaining the confidentiality of your account.</li>
          <li> Any misuse of the platform will result in immediate termination.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>3. Payment & Transactions</h3>
        <ul>
          <li> Payments are securely processed through our trusted partners.</li>
          <li> No refunds are issued once a service has been delivered.</li>
          <li> Any dispute should be resolved through our support team.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>4. Prohibited Activities</h3>
        <ul>
          <li> Fraudulent activities are strictly prohibited.</li>
          <li> Harassment or abuse of other users is not tolerated.</li>
          <li> Violation of laws will result in legal actions.</li>
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

export default Terms;