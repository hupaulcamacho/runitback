import React from 'react';
import '../CSS/GuiltyGear.css';
import { Link } from 'react-router-dom';

import { characters } from '../Loaders/GG_loader';

export default function GuiltyGear() {
    let charComponents = [];

    for (let char in characters) {
        charComponents.push(
            <Link className='char-link' to={`/GGST/${char}`}>
                <div className='char'>
                    <img className='char-icon'src={characters[char].icon} height='100px'/><br/>
                    <p>{characters[char].charName}</p>
                </div>
            </Link>
        )
    }
    return (
        <div>
            <h1>Guilty Gear: Strive</h1>
            <h1>Characters</h1>
            <div className='characters'>
                {charComponents}
            </div>
        </div>
    )
}