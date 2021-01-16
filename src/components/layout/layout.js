import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../header/header';
import Footer from '../footer/footer';

import layoutStyles from './layout.module.css';

const Layout = (props) => {
    return  (
        <React.Fragment>
            <CssBaseline />
                <Header />
                <main>
                    {props.children}
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;