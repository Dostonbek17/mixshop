import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import Iphone from '../images/Iphons.png'
const Home = () => {
    return (
        <div className="home">
            <div className="main">
                <div className="side1">
                    <h3>
                        GET THE NEW IPHONE 13 PRO
                    </h3>
                    <p>
                        A transpormative triple-camera  system that adds
                        tons of capability wuth out complexity
                    </p>
                <div className="buttons">
                    <a href="#" className="button1">
                        Buy now <FaShoppingBasket />
                    </a>
                    <a href="#" className="button1">
                        With $599 with trade-in
                    </a>
                </div>
                </div>
                <div className="side2">
                    <img src={Iphone} alt="Iphone 13" />
                </div>
            </div>
        </div>
    );
};

export default Home;