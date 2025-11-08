import { useEffect, useState } from "react";
import AuthForm from "./components/AuthForm";
import { signup, login, getUser, logout } from "./api";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((res) => setUser(res.data.user));
  }, []);

  const handleSignup = async (data) => {
    await signup(data);
    const res = await getUser();
    setUser(res.data.user);
  };

  const handleLogin = async (data) => {
    await login(data);
    const res = await getUser();
    setUser(res.data.user);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Authentication</h1>

        {!user ? (
          <AuthForm onSignup={handleSignup} onLogin={handleLogin} />
        ) : (
          <>
            <p style={{ textAlign: "center", marginBottom: "20px" }}>
              Logged in as: <b>{user.username}</b>
            </p>

            <button className="submit-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
