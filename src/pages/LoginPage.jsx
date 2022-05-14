import LStyle from "../styles/LoginStyles.module.scss";
import formValidate from "../hooks/fromValidate";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();

  //it is called after validation
  const loginSuccess = () => {
    navigate("/dashboard");
  };

  const { handleChange, handleSubmit, errors, formData } =
    formValidate(loginSuccess);

  //destructuring data
  const { email, password, confirmPassword, name, phNumber } = formData;

  return (
    <div className={LStyle.container}>
      <div className={LStyle.container__box1}>
        <div className={LStyle.box1__imgDiv}>
          <img
            src="https://mydash.report/static/media/date-range.e19fcc46.webp"
            alt="dashboard"
          />
        </div>
        <div className={LStyle.box1__infoDiv}>
          <h3>Choose a date range</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            assumenda eum explicabo eos quae vero{" "}
          </p>
        </div>
      </div>
      <div className={LStyle.container__box2}>
        <div className={LStyle.box2__loginForm}>
          <h1>Create an account</h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className={LStyle.loginForm__inputDiv}>
              <label>Your email address</label>
              <input
                type="text"
                name="email"
                defaultValue={email}
                onChange={handleChange}
              />
              {errors.email && <h3>{errors.email}</h3>}
            </div>
            <div className={LStyle.loginForm__inputDiv}>
              <label>Your Password</label>
              <input
                type="password"
                name="password"
                defaultValue={password}
                onChange={handleChange}
              />
              {errors.password && <h3>{errors.password}</h3>}
            </div>
            <div className={LStyle.loginForm__inputDiv}>
              <label>Confirm Your Password</label>
              <input
                type="password"
                name="confirmPassword"
                defaultValue={confirmPassword}
                onChange={handleChange}
              />
              {errors.Cpassword && <h3>{errors.Cpassword}</h3>}
            </div>
            <div className={LStyle.loginForm__inputDiv}>
              <label>Your full name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onChange={handleChange}
              />
              {errors.name && <h3>{errors.name}</h3>}
            </div>
            <div className={LStyle.loginForm__inputDiv}>
              <label>Your phone number</label>
              <input
                type="text"
                name="phNumber"
                defaultValue={phNumber}
                onChange={handleChange}
              />
              {errors.phNumber && <h3>{errors.phNumber}</h3>}
            </div>
            <div className={LStyle.loginForm__checkboxDiv}>
              <input type="checkbox" id="checked" name="checkbox" required />
              <label for="terms">I read and agree Terms and Conditions</label>
            </div>
            <button>create account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
