import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  return (
    <div>
      <h1>Form</h1>
      <h3>Please login to your account!</h3>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
