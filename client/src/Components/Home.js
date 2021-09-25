import React from 'react';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';

// images
import guiltyGear from "../Assets/GGST.png";
import dragonballFighterz from "../Assets/DBFZ.png";



export default function Home() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        })
    });
    
    function removeActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove('active');
        })
    }
    return (
        <div className='home-main'>
            <h1>Run it back</h1>
            <h3>Pick a Game to get started...</h3>

            <div className='game-logos'>
                    <div className='game'>
                        <Link to="/GGST" >
                            <img src={guiltyGear} height="100px" />
                        </Link>
                    </div>
        
                {/* <Link to="/DBFZ">
                    <div className='game'>
                        <img src={dragonballFighterz} height="125px" />
                    </div>
                </Link> */}

                {/* <div class="panel active " style={{backgroundImage: `url('https://catwithmonocle.com/wp-content/uploads/2021/06/featured-ggs-artwork-01.jpg')`}} >
                    <h3>Guilty Gear Strive</h3>
                </div>
                <div class="panel" style={{backgroundImage: `url('https://images5.alphacoders.com/559/thumb-1920-559865.jpg')`}} >
                    <h3>Street Fighter V</h3>
                </div>
            
                <div class="panel" style={{backgroundImage: `url('https://wallpapercave.com/wp/wp2570393.jpg')`}} >
                    <h3>Tekken 7</h3>
                </div>
                <div class="panel" style={{backgroundImage: `url('https://images6.alphacoders.com/933/thumb-1920-933307.jpg')`}} >
                    <h3>Dragon Ball FighterZ</h3>
                </div> */}
            </div>
        </div>
        
    )
}