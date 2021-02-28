import React, {useState} from 'react';

import overflowStyles from './overflow_text.module.scss';

const OverflowText = ({content}) => {
    const [overflow, setOverflow] = useState(false)

    return (
        <article className={overflowStyles.article}>
            <img 
                src={content.image}
                alt={content.title.en}
            />
            <div>
                <h3>{content.title.pl}</h3>
                <p>
                    {`${content.paragraphs.pl[0]}  `}
                    {!overflow && <span 
                    onClick={() => {setOverflow(true)}}
                    >
                        &gt;&gt;
                    </span>}
                </p>

                {overflow && content.paragraphs.pl.map((par, index) => {
                    if (index > 0) {
                        if (index === 1) {
                            return (
                                <p key={index}>  
                                    {<span
                                        onClick={() => {setOverflow(false)}}
                                    >
                                        &lt;&lt;
                                    </span>} {par}
                                </p>
                            )
                        } else {
                            return (
                                <p key={index}>{par}</p>
                            )
                        }
                    }
                })}
            </div>
        </article>
    )
}

export default OverflowText;