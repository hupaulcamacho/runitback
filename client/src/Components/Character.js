import React from 'react';

import { characters } from '../Loaders/GG_loader';

export default function Character(props) {
    const char = props.match.params.character;
    // console.log(char)
    return (
        <div>
            <div className='char'>
                <img className='char-icon' src={characters[char].icon} height='100px'/><br/>
                <p>{characters[char].charName}</p>
            </div>
            <img className='char-portrait' src={characters[char].portrait} />
        </div>
    )
}
