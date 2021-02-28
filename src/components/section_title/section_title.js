import React from 'react';
import secTitleStyles from './section_title.module.scss';


const SectionTitle = ({info}) => {
    return (
        <section className={secTitleStyles.title}>
            <div className={secTitleStyles.titleContainer}>
                <h2>
                    {info.title.pl}
                </h2>
            </div>
            <article>
                <p>{info.descLong.pl}</p>
            </article>
        </section>
    )
}

export default SectionTitle;