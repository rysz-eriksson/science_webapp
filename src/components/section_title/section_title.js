import React from 'react';

import secTitleStyles from './section_title.module.scss';

const SectionTitle = ({info}) => {
    return (
        <section className={secTitleStyles.title}>
            <article>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
            </article>
        </section>
    )
}

export default SectionTitle;