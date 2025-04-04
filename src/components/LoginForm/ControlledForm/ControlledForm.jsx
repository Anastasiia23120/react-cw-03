import CSS from "./ControlledForm.module.css";
import React, { useState } from "react";

const ControlledForm = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleLogChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  //   const handlePwdChange = (evt) => {
  //     setValues({ ...values, password: evt.target.value });
  //   };

  //   const handleChange = (evt) => {
  //     console.log(evt.target.value);
  //     console.log(evt.target.name);
  //   };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <imput
        type="text"
        name="login"
        value={values.login}
        onChange={handleLogChange}
      ></imput>
      <imput
        type="password"
        name="password"
        value={values.password}
        onChange={handleLogChange}
        // onChange={handlePwdChange}
      ></imput>
      <button type="submit">Login</button>
    </form>
  );
};

export default ControlledForm;
