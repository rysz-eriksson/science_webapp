import React from 'react';
import { Link } from 'gatsby';

import Submenu from '../sub_menu/sub_menu';

import logo from '../../images/logo-cbm.svg';

import headerStyles from './header.module.scss';

const Header = ({links}) => {
    return (
        <header className={headerStyles.container}>
            <div className={headerStyles.header}>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt='logo'
                        />
                    </Link>
                </div>
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
                <div className={headerStyles.buttons}>
                    <button className={headerStyles.activeBtn}>
                        PL
                    </button>
                    <button>
                        EN
                    </button>
                </div>
            </div>
            {links && <Submenu links={links} />}
        </header>
    )
};

export default Header;