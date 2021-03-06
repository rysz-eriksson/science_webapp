import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../header/header';
import Footer from '../footer/footer';

import layoutStyles from './layout.module.scss';
import '../../styles/index.scss';

const Layout = (props) => {
    return  (
        <React.Fragment>
            <CssBaseline />
                <Header links={props.links} />
                <main className={props.links ? layoutStyles.main : layoutStyles.mainNoSub}>
                    {props.children}
                </main>
            <Footer links={props.links}/>
        </React.Fragment>
    )
}

export default Layout;