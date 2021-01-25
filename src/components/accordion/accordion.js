import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import accordionStyles from './accordion.module.scss';

const CustomAccordion = ({articles}) => {
    return (
        <div className={accordionStyles.container}>
            {articles.map(item => {
                return (
                    <Accordion 
                        key={item.year}
                        className={accordionStyles.acc}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className={accordionStyles.summary}
                        >
                            <h4>{item.year}</h4>
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