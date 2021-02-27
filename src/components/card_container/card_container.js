import React from 'react';

import CustomCard from '../card/card';
import cardContStyles from './card_container.module.scss';

const CardContainer = ({content, action}) => {
    return (
        <div className={cardContStyles.container}>
            {content.map(item => {
                return (
                <CustomCard
                    key={item.key}
                    content={item}
                    action={action}
              />
                )
            })}
        </div>
    )
}

export default CardContainer;