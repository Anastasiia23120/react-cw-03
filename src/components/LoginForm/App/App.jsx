import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SearchBar from "../SearchBar/SearchBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import RadioButtons from "../RadioButtons/RadioButtons";
import Checkboxes from "../Checkboxes/Checkboxes";
import ControlledForm from "../ControlledForm/ControlledForm";
import TaskList from "../TaskList/TaskList";
import initialTasks from "../../../task.json";
import FormTask from "../FormTask/FormTask";
import Filter from "../Filter/Filter";
import css from "./App.module.css";

import FeedbackForm from "../FeedbackForm/FeedbackForm";

function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTasks = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 style={{ color: "hotpink" }}>Lesson 2</h1>
      <FeedbackForm />

      <h1 style={{ color: "hotpink" }}>Lesson 1</h1>
      <h1>1.Form</h1>
      <h3>Please login to your account!</h3>
      <LoginForm onLogin={handleLogin} />

      <h1>2.Search Bar</h1>
      <SearchBar />

      <h1>3.Lang Switcher</h1>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />

      <h1>4.Radio Buttons</h1>
      <RadioButtons />

      <h1>5.Check boxes</h1>
      <Checkboxes />

      <h1>6.Controlled Form</h1>
      <ControlledForm />

      <h1>7.Form Tasks</h1>
      <FormTask onAdd={addTasks} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
