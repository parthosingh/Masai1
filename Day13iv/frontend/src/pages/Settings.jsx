import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUser({ name, email });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;
