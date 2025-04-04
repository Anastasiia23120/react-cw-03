import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm/LoginForm";
import SearchBar from "./components/LoginForm/SearchBar/SearchBar";
import LangSwitcher from "./components/LoginForm/LangSwitcher/LangSwitcher";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");

  return (
    <>
      <h1>Form</h1>
      <h3>Please login to your account!</h3>
      <LoginForm onLogin={handleLogin} />

      <h1>SearchBar</h1>
      <SearchBar />

      <h1>LangSwitcher</h1>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
}

export default App;
