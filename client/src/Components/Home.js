import React from 'react';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';

// images
import guiltyGear from "../Assets/GGST.png";
import dragonballFighterz from "../Assets/DBFZ.png";

export default function Home() {
    return (
        <div className='home-main'>
            <h1>Run it back</h1>
            <h3>Pick a Game to get started...</h3>

            <div className='game-logos'>
                <Link to="/GGST">
                    <div className='game'>
                        <img src={guiltyGear} height="100px" />
                    </div>
                </Link>
                <Link to="/DBFZ">
                    <div className='game'>
                        <img src={dragonballFighterz} height="125px" />
                    </div>
                </Link>
            </div>
        </div>
        
    )
}