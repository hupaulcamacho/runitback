import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Character.css';

import { characters } from '../Loaders/GG_loader';

export default function Character(props) {
    const char = props.match.params.character;

    const [ normalsClicked, setNormalsClicked ] = useState(false);
    const [ commandNormalsClicked, setCommandNormalsClicked ] = useState(false);
    const [ specialsClicked, setSpecialsClicked ] = useState(false)


    const handleNormalsClicked = () => {
        if(normalsClicked) {
            setNormalsClicked(false)
        } else {
            setNormalsClicked(true)
        }
    }
    const handleCommandNormalsClicked = () => {
        if(commandNormalsClicked) {
            setCommandNormalsClicked(false)
        } else {
            setCommandNormalsClicked(true)
        }
    }
    const handleSpecialsClicked = () => {
        if(specialsClicked) {
            setSpecialsClicked(false)
        } else {
            setSpecialsClicked(true)
        }
    }

    // console.log(char)
    let moves = characters[char].moves;
    console.log(moves);
    let normalMoveComponents = []; 
    let specialMoveComponents = []; 
    let commandNormalMoveComponents = [];

    for (let move in moves.normals) {
       normalMoveComponents.push(
           <div className='move'>
               <h3>{move}</h3>
               <p className='move-properties'>Damage: {moves.normals[move].damage}</p>
               <p className='move-properties'>Startup: {moves.normals[move].startup}</p>
               <p className='move-properties'>Active: {moves.normals[move].active}</p>
               <p className='move-properties'>Recovery: {moves.normals[move].recovery}</p>
               <p className='move-properties'>On-Block: {moves.normals[move].onblock}</p>
           </div>
       ) 
    }
    for (let move in moves.specials) {
        specialMoveComponents.push(
            <div className='move'>
                <h3>{move}</h3>
                <p className='move-properties'>Damage: {moves.specials[move].damage}</p>
                <p className='move-properties'>Startup: {moves.specials[move].startup}</p>
                <p className='move-properties'>Active: {moves.specials[move].active}</p>
                <p className='move-properties'>Recovery: {moves.specials[move].recovery}</p>
                <p className='move-properties'>On-Block: {moves.specials[move].onblock}</p>
            </div>
        ) 
     }
    for (let move in moves.commandNormals) {
        commandNormalMoveComponents.push(
            <div className='move'>
                <h3>{move}</h3>
                <p className='move-properties'>Damage: {moves.commandNormals[move].damage}</p>
                <p className='move-properties'>Startup: {moves.commandNormals[move].startup}</p>
                <p className='move-properties'>Active: {moves.commandNormals[move].active}</p>
                <p className='move-properties'>Recovery: {moves.commandNormals[move].recovery}</p>
                <p className='move-properties'>On-Block: {moves.commandNormals[move].onblock}</p>
            </div>
        ) 
    }
    return (
        <div className='character-main'>
            {/* <Link to={`/GGST`} className="back">Back to Main</Link> */}
            <div className='char-header'>
                <img className='char-icon-a' src={characters[char].icon} />
                <h1 className='char-name'>{characters[char].charName}</h1>
            </div>

            <div>
            {commandNormalsClicked ? 
            <div className='moves'>
                <h1 className='selection' onClick={handleCommandNormalsClicked}>Command Normals</h1>
                {commandNormalMoveComponents}
            </div> 
            :
            <h1 className='selection' onClick={handleCommandNormalsClicked}>Command Normals</h1>
            }
            {normalsClicked ? 
            <div className='moves'>
                <h1 className='selection' onClick={handleNormalsClicked}>Normals</h1>
                {normalMoveComponents}
            </div> 
            :
            <h1 className='selection' onClick={handleNormalsClicked}>Normals</h1>
            }
            
            {specialsClicked ? 
            <div className='moves'>
                <h1 className='selection' onClick={handleSpecialsClicked}>Specials</h1>
                {specialMoveComponents}
            </div> 
            :
            <h1 className='selection' onClick={handleSpecialsClicked}>Specials</h1>
            }

            </div>
            
           
            <img className='char-portrait' src={characters[char].portrait} />
        </div>
    )
}
