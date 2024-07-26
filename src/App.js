import "./App.css";
import AppleIcon from "./svg/apple";
import RightArrow from "./svg/arrow";
import FacebookIcon from "./svg/facebook";
import GoogleIcon from "./svg/google";
import User from "./svg/user";

function App() {
  return (
    <div className="main">
      <div className="card">
        <div>
          <a href="https://www.shopify.com/" target="_blank" rel="noreferrer">
            <img src="./logo.svg" alt="Logo" width={92} height={27} />
          </a>
        </div>
        <div className="contentForm">
          <div className="text">
            <h1>Log in</h1>
            <h3>Continue to Shopify account</h3>
          </div>
          <form className="form">
            <label htmlFor="email">Email</label>
            <input type="email" />
            <button type="submit" className="emailButton">
              Continue with email
            </button>
            <button type="submit" className="passkey">
              <User />
              Sign in with passkey
            </button>
          </form>
          <p className="sideways">
            <span>or</span>
          </p>
          <div className="icons">
            <div className="iconContainer">
              <AppleIcon />
            </div>
            <div className="iconContainer">
              <FacebookIcon />
            </div>
            <div className="iconContainer">
              <GoogleIcon />
            </div>
          </div>
          <div className="newTo">
            <h3>New to Shopify</h3>
            <a href="/">Get started</a>
            <RightArrow />
          </div>
        </div>

        <div className="bottomLinks">
          <a href="/">Help</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
      </div>
    </div>
  );
}

export default App;
