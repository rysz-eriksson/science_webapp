import React from 'react';

import logoCBM from '../../images/logo-cbm-vertical.svg'
import logoUJ from '../../images/logo-uj\.svg';


import footerStyles from './footer.module.scss';

const Footer = ({links}) => {
    return (
        <footer>
            <div className={links ? footerStyles.footer : footerStyles.noDisplay}>
            <div className={footerStyles.container}>
                <section className={footerStyles.logos}>
                    <img 
                        className={footerStyles.cm} 
                        src={logoCBM}
                        alt='logo cbm'
                    />
                    <img 
                        className={footerStyles.uj} 
                        src={logoUJ}
                        alt='logo uj'
                    />
                </section>
                <section>
                    <h4>FUNDATORZY</h4>
                    <p>Katedra Neurologii UJ-CM</p>
                    <p>Instytut Psychologii UJ</p>
                    <p>Katedra Radiologii UJ-CM</p>
                    <p>Katedra Kardiologii UJ-CM</p>
                    <p>Katedra Psychiatrii UJ-CM</p>
                    <p>Zakład Kognitywistyki Instytutu Filozofii UJ</p>
                    <p>Instytut Psychologii Stosowanej UJ/Grupa Badawcza Neuroobrazowania MCB</p>
                </section>
                <section>
                <h4>KONTAKT</h4>
                <address>
                    <p>ul. Ingardena</p>
                    <p>30-310 Kraków</p>
                    <p>
                        <a href="mailto:brain@uj.edu.pl">brain@uj.edu.pl</a>
                    </p>
                    <p>
                        <a href="tel:555555555">555 555 555</a>
                    </p>
                </address>
                <div className={footerStyles.social} >
                    <a href="https://twitter.com/explore" target="_blank"></a>
                    <a href="https://www.facebook.com/" target="_blank"></a>
                    <a href="mailto:brain@uj.edu.pl" target="_blank"></a>
                </div>
                <h4>PRACA</h4>
                </section>
            </div>
        </div>
        <div 
            className={footerStyles.blackBox}
            className={links ? footerStyles.blackBox : footerStyles.greenBox}
        >
        </div>
        </footer>
    )
};

export default Footer;