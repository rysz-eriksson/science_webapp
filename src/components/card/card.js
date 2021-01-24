import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import image from '../../images/waves.jpg';

const useStyles = makeStyles({
    action: {
        width: 'fit-content',
        margin: '0 0.5rem 1.5rem 0.5rem',
    },
    card: {
        backgroundColor: '#20EFAF',
        color: '#FFFFFF',
        width: '240px',
        height: '360px',
        textAlign: 'end',
    },
    image: {
        height: '150px',
    },
    title: {
        margin: '0',
        textTransform: 'uppercase',
    },
    content: {
        display: 'flex',
        height: '210px',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    paragraph: {
        margin: '0.3rem'
    }
})

const CustomCard = ({title, content}) => {
    const classes = useStyles();
    return (
        <CardActionArea className={classes.action}>
            <Card className={classes.card}>
                <CardMedia image={image} className={classes.image}/>
                <CardContent className={classes.content}>
                    <h4 className={classes.title}>
                        {title}
                    </h4>
                    <div>
                        {content.map(par => <p key={par.slice(-5)} className={classes.paragraph}>{par}</p>)}
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}

export default CustomCard;