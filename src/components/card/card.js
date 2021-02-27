import React, { useState } from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CustomDialog from '../dialog/dialog';

import cardStyles from './card.module.scss';

const CustomCard = ({content, action}) => {
    const [open, setOpen] = useState(false);

    const handleClickAction = () => {
        if (action === 'dialog') {
            setOpen(true);
        }
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <>
        <CardActionArea className={cardStyles.action} onClick={handleClickAction}>
            <Card className={cardStyles.card}>
                <CardMedia image={content.image} className={cardStyles.image}/>
                <CardContent className={cardStyles.content}>
                    <h4 className={cardStyles.title}>
                        {content.title}
                    </h4>
                    <div>
                        {content.subtitle.map(par => <p key={par.slice(-5)} className={cardStyles.paragraph}>{par}</p>)}
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
        {action === 'dialog' && <CustomDialog onClose={handleClose} open={open} />}
    </>
    )
}

export default CustomCard;