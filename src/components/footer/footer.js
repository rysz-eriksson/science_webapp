import React from 'react';

import logoCBM from '../../images/logo-cbm-vertical.svg'
import logoUJ from '../../images/logo-uj\.svg';


import footerStyles from './footer.module.scss';

const Footer = ({links}) => {
    return (
        <footer>
            <div className={footerStyles.footer}>
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
                    <p><a href="http://www.neurologia.wl.uj.edu.pl" target="_blank">Katedra Neurologii UJ-CM</a></p>
                    <p><a href="https://psychologia.uj.edu.pl" target="_blank">Instytut Psychologii UJ</a></p>
                    <p><a href="http://www.radiologia.wl.cm.uj.edu.pl/" target="_blank">Katedra Radiologii UJ-CM</a></p>
                    <p><a href="http://www.ikard.cm-uj.krakow.pl" target="_blank">Katedra Kardiologii UJ-CM</a></p>
                    <p><a href="https://katedrapsychiatrii.wl.cm.uj.edu.pl" target="_blank">Katedra Psychiatrii UJ-CM</a></p>
                    <p><a href="https://filozofia.uj.edu.pl/zaklad-kognitywistyki" target="_blank">Zakład Kognitywistyki Instytutu Filozofii UJ</a></p>
                    <p><a href="https://mcb.uj.edu.pl/grupa-badawcza-neuroobrazowania" target="_blank">Instytut Psychologii Stosowanej UJ/Grupa Badawcza Neuroobrazowania MCB</a></p>
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
        <div className={footerStyles.blackBox}>
        </div>
        </footer>
    )
};

export default Footer;