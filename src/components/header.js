import React from 'react';
import { Link } from 'gatsby';

const linkStyles = {
    textDecoration: 'none'
}

const activeStyles = {
    color: 'green'
}

const Header = () => {
    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/about"
                            style={linkStyles}
                            activeStyle={activeStyles}
                        >
                            O CENTRUM
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/research"
                            style={linkStyles}
                            activeStyle={activeStyles}
                        >
                            BADANIA
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/onboarding"
                            style={linkStyles}
                            activeStyle={activeStyles}
                        >
                            WDROŻENIE
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tools"
                            style={linkStyles}
                            activeStyle={activeStyles}
                        >
                            NARZĘDZIA
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/education"
                            style={linkStyles}
                            activeStyle={activeStyles}
                        >
                            KSZTAŁCENIE
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/spreading"
                            style={linkStyles}
                            activeStyle={activeStyles}
                        >
                            UPOWSZECHNIENIE
                        </Link>
                    </li>
                </ul>
            </nav>
            <section>
                <button>PL</button>
                <button>EN</button>
            </section>
        </header>
    )
};

export default Header;