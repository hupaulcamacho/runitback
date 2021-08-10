import React from 'react';
import '../CSS/GuiltyGear.css';
import { characters } from '../Loaders/GG_loader';

export default function GuiltyGear() {
    let charComponents = [];

    for (let char in characters) {
        charComponents.push(
            <div className='char'>
                <img className='char-icon'src={characters[char].icon} height='100px'/><br/>
                <p>{characters[char].charName}</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Guilty Gear: Strive</h1>
            <div className='characters'>
                {charComponents}
            </div>
        </div>
    )
}