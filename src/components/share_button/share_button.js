import React from 'react';

import shareImage from '../../images/share.svg';

const ShareButton = () => {
    return (
        <img 
            width="35px"
            height="35px"
            src={shareImage}
            alt="shareButton"
        />
    )
}

export default ShareButton;