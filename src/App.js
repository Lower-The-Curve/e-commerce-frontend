import "./App.css";
import AppleIcon from "./svg/apple";
import FacebookIcon from "./svg/facebook";

function App() {
  return (
    <div className="main">
      <div className="card">
        <div>
          <a href="https://www.shopify.com/" target="_blank" rel="noreferrer">
            <img src="./logo.svg" alt="Logo" width={92} height={27} />
          </a>
        </div>
        <div>
          <div>
            <h1>Log in</h1>
            <h3>Continue to Shopify account</h3>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" />
            <button type="submit">Continue with email</button>
            <button type="submit">Sign in with passkey</button>
          </form>
          <p className="sideways">
            <span>or</span>
          </p>
        </div>
        <div>
          <AppleIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
