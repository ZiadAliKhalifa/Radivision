import React from 'react';

import logo from '../images/logo.svg';
import mario from '../images/mario.png';
import luigi from '../images/luigi.png';
import bowser from '../images/bowser.png';

export default function ImageDisplay({ selected }) {
    const imageList = [logo, mario, luigi, bowser]

    return <>
        <img src={imageList[selected]} className="img" alt="Selected" />
    </>
}
