import React, { useState } from "react";

function DynamicEmailForm() {
  const [emails, setEmails] = useState([""]);

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Dynamic Email Form</h2>
      {emails.map((email, index) => (
        <div key={index}>
          <input
            type="email"
            placeholder={`Email ${index + 1}`}
            value={email}
            onChange={(e) => handleEmailChange(index, e.target.value)}
          />
          {!isValidEmail(email) && email !== "" && (
            <span style={{ color: "red", marginLeft: "10px" }}>
              Invalid Email
            </span>
          )}
        </div>
      ))}
      <button onClick={addEmailField}>Add Email</button>

      <h3>Entered Emails:</h3>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicEmailForm;
