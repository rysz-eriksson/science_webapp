import React from 'react';

import secTitleStyles from './section_title.module.scss';

import image from '../../images/neurons.png';

const SectionTitle = ({info}) => {
    return (
        <section 
            className={secTitleStyles.title}
            style={{ background: `url(${info.image}) center / cover no-repeat` }}
            
        >
            <article>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
            </article>
        </section>
    )
}

export default SectionTitle;