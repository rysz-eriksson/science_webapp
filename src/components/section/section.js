import React from 'react';

import sectionStyles from './section.module.scss';

const Section = ({title, children}) => {
    return (
        <section
            key={title.key}
            id={title.en}
            className={sectionStyles.section}
        >
            <h2>
                {title.pl.toUpperCase()}
            </h2>
            {children}
        </section>
    )
};

export default Section;