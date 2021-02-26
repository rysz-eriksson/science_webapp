import React, { useState } from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import CustomDialog from '../dialog/dialog';

import cardStyles from './card.module.scss';

const CustomCard = ({title, content, image}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <>
        <CardActionArea className={cardStyles.action} onClick={handleClickOpen}>
            <Card className={cardStyles.card}>
                <CardMedia image={image} className={cardStyles.image}/>
                <CardContent className={cardStyles.content}>
                    <h4 className={cardStyles.title}>
                        {title}
                    </h4>
                    <div>
                        {content.map(par => <p key={par.slice(-5)} className={cardStyles.paragraph}>{par}</p>)}
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
        <CustomDialog onClose={handleClose} open={open} />
    </>
    )
}

export default CustomCard;