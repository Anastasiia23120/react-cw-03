import React, { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm/LoginForm";
import SearchBar from "./components/LoginForm/SearchBar/SearchBar";
import LangSwitcher from "./components/LoginForm/LangSwitcher/LangSwitcher";
import RadioButtons from "./components/LoginForm/RadioButtons/RadioButtons";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");

  return (
    <>
      <h1>1.Form</h1>
      <h3>Please login to your account!</h3>
      <LoginForm onLogin={handleLogin} />

      <h1>2.SearchBar</h1>
      <SearchBar />

      <h1>3.LangSwitcher</h1>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />

      <h1>4.RadioButtons</h1>
      <RadioButtons />
    </>
  );
}

export default App;
