import React from 'react';
import { Link } from 'gatsby';

import Submenu from '../sub_menu/sub_menu';

import { mainMenuInfo } from '../../data/sections_info';
import logo from '../../images/logo-cbm.svg';

import headerStyles from './header.module.scss';

const Header = ({links}) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const page = url.split('/')[3];
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
                        {mainMenuInfo.map((link) => {
                            return (
                                <li key={link.en}>
                                    <Link
                                        to={`/${link.en}`}
                                        className={page === link.en ? headerStyles.active : undefined}
                                    >
                                        {link.pl}
                                    </Link>
                                </li>
                            )
                        })}
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