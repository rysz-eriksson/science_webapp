import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    card: {
        backgroundColor: '@$bg-color',
        color: '$font-color',
        width: '240px',
        height: '360px',
    },
    image: {
        height: '120px',
    },
    content: {
        margin: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space=between',
        alignItems: 'flex-end'
    }
})

const CustomCard = ({title, image, content}) => {
    const classes = useStyles();
    return (
        <CardActionArea>
            <Card className={classes.card}>
                <CardMedia image={image} className={classes.image}/>
                <CardContent className={classes.content}>
                    <h3>
                        {title.toUpperCase()}
                    </h3>
                    <div>
                        {content.map(par => <p key={par.slice(-5)}>{par}</p>)}
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default CustomCard;