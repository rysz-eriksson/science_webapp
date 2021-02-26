import React from 'react';

import Overlay from '../overlay/overlay';

import secTitleStyles from './section_title.module.scss';


const SectionTitle = ({info}) => {
    return (
        <section 
            className={secTitleStyles.title}
            style={{ background: `url(${info.image}) center / cover no-repeat` }}
        >
            <Overlay>
                <div className={secTitleStyles.article}>
                    <article>
                        <h2>{info.title}</h2>
                        <p>{info.description}</p>
                    </article>
                </div>
            </Overlay>
        </section>
    )
}

export default SectionTitle;