import {Link} from "react-router-dom";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({children}: LayoutProps){
    return(
        <div>
            <header>
                <h1>Assassin</h1>

                <nav>
                    <Link to="/">Home</Link>
                </nav>

                <hr/>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}