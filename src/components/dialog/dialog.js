import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import dialogStyles from './dialog.module.scss';

const CustomDialog = ({open, onClose, content}) => {
    return (
        <Dialog 
            open={open}
            PaperProps={{
                style: {
                    borderRadius: '30px',
                    maxWidth: '1170px',
                    padding: '10px',
                }
            }}
        >
            <button 
                onClick={() => {onClose()}}
                className={dialogStyles.button}
            ></button>
            <article className={dialogStyles.article}>
                <h3>{content.title}</h3>
                <div className={dialogStyles.subtitles}>
                    <h3>{`${content.subtitle[0]} ${content.subtitle[1]}`}</h3>
                    <h3>{`${content.subtitle2[0]} ${content.subtitle2[1]}`}</h3>
                </div>
                {content.details.map((item, index) => (<p key={index}>{item}</p>))}
                <h3 className={dialogStyles.team}>{`${content.team[0]}:`}</h3>
                {content.team.map((item, index) => {
                    if (index > 0) {
                        return (<p key={index} className={dialogStyles.team}>{item}</p>)
                    }
                })}
            </article>
        </Dialog>
    )
}

export default CustomDialog;