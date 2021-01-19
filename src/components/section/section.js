import React from 'react';

import sectionStyles from './section.module.scss';

const Section = ({title, children}) => {
    return (
        <section
            key={title.en}
            id={title.en}
            className={sectionStyles.section}
        >
            <h2>
                {title.pl}
            </h2>
            {children}
        </section>
    )
};

export default Section;