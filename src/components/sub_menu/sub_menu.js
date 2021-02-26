import React from 'react';
import { Link } from 'gatsby';

import submenuStyles from './sub_menu.module.scss';

export default ({links}) => {
    return (
        <div className={submenuStyles.submenu}>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.en}>
                            <Link
                                to={"#" + link.en}
                                >
                                    {link.pl}
                                </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}