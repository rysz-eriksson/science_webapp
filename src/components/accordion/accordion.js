import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomAccordion = ({articles}) => {
    return (
        <div>
            {articles.map(item => {
                return (
                    <Accordion key={item.year}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <h5>{item.year}</h5>
                        </AccordionSummary>
                        <AccordionDetails>
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