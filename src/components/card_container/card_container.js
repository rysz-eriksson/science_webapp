import React from 'react';

import CustomCard from '../card/card';
import cardContStyles from './card_container.module.scss';

const CardContainer = ({content}) => {
    return (
        <div className={cardContStyles.container}>
            {content.map(item => {
                return (
                <CustomCard
                    key={item.key}
                    title={item.title}
                    image={item.image}
                    content={item.content}
              />
                )
            })}
        </div>
    )
}

export default CardContainer;