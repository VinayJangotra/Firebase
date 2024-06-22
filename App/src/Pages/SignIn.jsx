import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // Import your Firebase config

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth(app);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      await signInWithEmailAndPassword(auth, email, password).then((val)=>console.log('Sign in Successfully'));
      // Handle successful sign-in here, e.g., redirect to another page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
