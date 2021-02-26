import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import dialogStyles from './dialog.module.scss';

const CustomDialog = (props) => {
    return (
        <Dialog open={props.open}>
            <button onClick={() => {props.onClose()}}>Close</button>
            <h2>ha</h2>
            <h3>ha</h3>
            <h3>ha</h3>
            <p>ha</p>
        </Dialog>
    )
}

export default CustomDialog;