// import css from "./Form.module.css";

const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" placeholder="Login" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
