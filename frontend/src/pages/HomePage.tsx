import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
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
    </Layout>
  );
}