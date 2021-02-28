import React, {useEffect} from 'react';
import { Link } from 'gatsby';

import submenuStyles from './sub_menu.module.scss';

export default ({links}) => {
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         for (let entry of entries) {
    //             if(entry.target.id) {
    //                 const path = entry.target.baseURI.split('/')[3]
    //                 const selector = `a[href="/${path}/#${entry.target.id}"]`
    //                 const link = document.querySelector(selector);
    //                 console.log(link)
    //                 if (entry.isIntersecting) {
    //                     link.style={ color: 'black'}
    //                 } else {
    //                     link.style={ color: 'white'}
    //                 }
    //             }
    //         }
    //     }, {threshold: [0.5]} )
        
    //     document.querySelectorAll('section').forEach((item) => {
    //         observer.observe(item);
    //     })
    // })
    
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