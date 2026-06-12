import { useState, type FormEvent } from "react";

import Layout from "../components/Layout";

export default function RegisterPage(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log("Creating Account");

        const user={
            username,
            email,
            password,
        };

        console.log(user);
    }

    return(
        <Layout>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <br/>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {/* <p>Username: {username}</p> */}
                <br/>

                <div>
                    <label>Email</label>
                    <br/>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <br/>

                <div>
                    <label>Password</label>
                    <br/>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <br/>

                <button type="submit">
                    Create Account
                </button>
            </form>
        </Layout>
    );
}