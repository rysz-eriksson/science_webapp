import React from 'react';

import ShareButton from '../share_button/share_button';

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
            <div className={sectionStyles.button}>
                <ShareButton />
            </div>
        </section>
    )
};

export default Section;