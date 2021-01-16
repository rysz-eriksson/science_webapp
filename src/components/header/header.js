import React from 'react';
import { Link } from 'gatsby';

import Button from '@material-ui/core/Button';

import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/about"
                            activeClassName={headerStyles.active}
                        >
                            O CENTRUM
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/research"
                            activeClassName={headerStyles.active}
                        >
                            BADANIA
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/onboarding"
                            activeClassName={headerStyles.active}
                        >
                            WDROŻENIE
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tools"
                            activeClassName={headerStyles.active}
                        >
                            NARZĘDZIA
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/education"
                            activeClassName={headerStyles.active}
                        >
                            KSZTAŁCENIE
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/spreading"
                            activeClassName={headerStyles.active}
                        >
                            UPOWSZECHNIENIE
                        </Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Button variant="contained" color="primary">PL</Button>
                <Button variant="contained" color="primary">EN</Button>
            </section>
        </header>
    )
};

export default Header;