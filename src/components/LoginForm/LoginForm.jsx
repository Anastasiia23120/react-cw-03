import CSS from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // запобігання типової поведінці HTML-форми за
    // допомогою методу preventDefault

    const form = evt.target;
    const { login, password } = form.elements;

    onLogin({
      login: login.value,
      password: password.value,
    });

    // console.log(login, password);
    // console.log(login.value, password.value);

    // console.log(evt);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="text" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
