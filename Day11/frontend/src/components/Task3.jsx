// UserApp.jsx
import React, { useEffect, useState } from "react";

// Reusable UserCard component
const UserCard = ({ name, email, city }) => {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

// Styles
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  margin: "12px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  background: "#fafafa",
};

// Main Component
const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>User Profiles</h2>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </div>
  );
};

export default UserApp;
