import React, { useState } from 'react';
import CustomButton from './CustomButton';
import Image from './ImageDisplay';


import '../styles/ImageSelector.css';

export default function ImageSelector(props) {
    const [selectedButton, setSelectedButton] = useState(0)

    const handleButtonClick = (value) => {
        let clickValue = parseInt(value)
        let possibleValues = [1, 2, 3]
        if (possibleValues.includes(clickValue)) {
            setSelectedButton(clickValue);
        }
    }

    return <>
        <div className="button-container">
            <CustomButton value="1" click={handleButtonClick} disabled={selectedButton === 1} />
            <CustomButton value="2" click={handleButtonClick} disabled={selectedButton === 2} />
            <CustomButton value="3" click={handleButtonClick} disabled={selectedButton === 3} />
        </div>
        <Image selected={selectedButton} />
    </>
}
