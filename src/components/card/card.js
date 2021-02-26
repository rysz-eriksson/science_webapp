import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import image from '../../images/equipment.png';

import cardStyles from './card.module.scss';

const CustomCard = ({title, content}) => {
    return (
        <CardActionArea className={cardStyles.action}>
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
    )
}

export default CustomCard;