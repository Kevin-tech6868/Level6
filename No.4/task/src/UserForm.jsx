import React, { useState } from "react";

const UserForm = () => {
  // Step 2: Initialize state as an object with `name` and `age`
  const [user, setUser] = useState({ name: "", age: "" });

  // Step 3: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Dynamically update the object properties
    }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Manage Object with useState</h2>

      {/* Input field for Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={user.name}
        onChange={handleChange}
        style={{ padding: "10px", margin: "5px", fontSize: "16px" }}
      />

      {/* Input field for Age */}
      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={user.age}
        onChange={handleChange}
        style={{ padding: "10px", margin: "5px", fontSize: "16px" }}
      />

      {/* Display Updated Data */}
      <p>
        <strong>Name:</strong> {user.name || "N/A"}
      </p>
      <p>
        <strong>Age:</strong> {user.age || "N/A"}
      </p>
    </div>
  );
};

export default UserForm;
