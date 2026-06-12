import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Assassin</h1>

      <div>
        <Link to="/login">
            <button>Login</button>
        </Link>
      </div>

      <div>
        <Link to="/register">
            <button>Register</button>
        </Link>
      </div>
    </div>
  );
}