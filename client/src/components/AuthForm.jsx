import { useState } from "react";

export default function AuthForm({ onSignup, onLogin }) {
  const [mode, setMode] = useState("signup");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="auth-tabs">
        <button
          className={mode === "signup" ? "active" : ""}
          onClick={() => setMode("signup")}
        >
          Signup
        </button>
        <button
          className={mode === "login" ? "active" : ""}
          onClick={() => setMode("login")}
        >
          Login
        </button>
      </div>

      {mode === "signup" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignup({ username, email, password });
          }}
        >
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="submit-btn">Create Account</button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin({ identifier, password });
          }}
        >
          <input placeholder="Email or Username" onChange={(e) => setIdentifier(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="submit-btn">Login</button>
        </form>
      )}
    </>
  );
}
