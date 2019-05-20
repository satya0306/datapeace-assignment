import React from 'react';
import LeftButton from './Button/Left/LeftButton';
import RightButton from './Button/Right/RightButton';

const Footer = (props) => {
    return (
        <div>
            <span>{props.candidate.id}</span>
            <LeftButton/>
            <RightButton/>
        </div>
    );
};

export default Footer;