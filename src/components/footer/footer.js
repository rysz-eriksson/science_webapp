import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

import footerStyles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.container}>
                <section className={footerStyles.logos}>
                    <h2 className={footerStyles.cm}></h2>
                    <h2 className={footerStyles.uj}></h2>
                </section>
                <section>
                    <h3>FUNDATORZY</h3>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                    <p>Katedra Filologii Romańskiej UJ-CM</p>
                </section>
                <section>
                <h3>KONTAKT</h3>
                <address>
                    <p>ul. Ingardena</p>
                    <p>30-310 Kraków</p>
                    <p>
                        <a href="mailto:brain@uj.edu.pl">brain@uj.edu.pl</a>
                    </p>
                    <p>
                        <a href="tel:555555555">555 555 555</a>
                    </p>
                <div>
                    <a href="https://twitter.com/explore" target="_blank">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FacebookIcon />
                    </a>
                </div>
                </address>
                <h3>PRACA</h3>
                </section>
            </div>
        </footer>
    )
};

export default Footer;