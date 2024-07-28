import "./App.css";
import AppleIcon from "./svg/apple";
import FacebookIcon from "./svg/facebook";
import GoogleIcon from "./svg/google";
import RightArrow from "./svg/arrow";
import User from "./svg/user";

function App() {
  return (
    <main className="main">
      <div className="square">
        <div>
          <div className="login-card">
            <header>
              <h1 className="login-card_logo">
                <a href="https://www.shopify.com/" target="_blank" rel="noreferrer">
                  <img
                    src="./logo.svg"
                    alt="Log in to Shopify"
                    width={100}
                    height={29}
                  />
                </a>
              </h1>
            </header>

            <div className="login-card_content">
              <div>
                <h1>Log in</h1>
                <h3>Continue to Shopify account</h3>
              </div>
            </div>
            <form className="form">
              <div className="emailBox">
                <label>Email</label>
                <input type="email" autoFocus size={30} />
              </div>
              <button type="submit">
                Continue with email{" "}
                <span className="rightArrow">
                  <RightArrow />
                </span>
              </button>
            </form>
            <button type="submit" className="passkey">
              <span>
                <User />
              </span>
              Sign in with passkey
            </button>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <div className="socialMediaContainer">
            <div>
              <a href="/" className="socialMedia">
                <AppleIcon />
              </a>
            </div>
            <div>
              <a href="/" className="socialMedia">
                <FacebookIcon />
              </a>
            </div>
            <div>
              <a href="/" className="socialMedia">
                <GoogleIcon />
              </a>
            </div>
          </div>
          <div className="getStarted">
            <span>New to Shopify?</span>
            <a href="/" className="start">
              Get started
              <span style={{ width: 20, height: 20 }}>
                <RightArrow />
              </span>
            </a>
          </div>
        </div>

        <footer>
          <div>
            <a href="/">Help</a>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
