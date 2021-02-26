import React from 'react';

import overlayStyles from './overlay.module.scss';

const Overlay = (props) => {
    return (
        <div className={overlayStyles.overlay}>
            {props.children}
        </div>
    )
}

export default Overlay;