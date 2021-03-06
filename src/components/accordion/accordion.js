import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import accordionStyles from './accordion.module.scss';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        position: 'inherit',
        '&$expanded': {
            margin: '0',

          },
    },
    expanded: {},
})

const CustomAccordion = ({articles}) => {
    const classes = useStyles();
    return (
        <div className={accordionStyles.container}>
            {articles.map((item, index) => {
                return (
                    <Accordion 
                        defaultExpanded={index === 0}
                        key={item.year}
                        className={classes.root}
                        classes={{
                            root: classes.root,
                            expanded: classes.expanded,
                          }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className={accordionStyles.summary}
                        >
                            <h4
                            className={index === articles.length - 1 ? accordionStyles.lastTitle : undefined}
                            >
                                {item.year}
                            </h4>
                        </AccordionSummary>
                        <AccordionDetails className={accordionStyles.details}>
                            {item.articles.map(article => {
                                return (
                                    <p key={article.key}>{`${article.authors} (${article.year}). ${article.title}.`}</p>
                                );
                            })}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            
        </div>
    )
}

export default CustomAccordion