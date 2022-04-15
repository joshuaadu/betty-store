import LoginInput from "./UI/LoginInput";

const AuthForm = (props) => {
  return (
    <form>
      <LoginInput label="Username" type="userText" />
      <LoginInput label="Password" type="password" />
    </form>
  );
};

export default AuthForm;
