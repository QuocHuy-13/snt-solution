import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './CatBreeds.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const CatBreeds = () => {

    const [catBreeds, setCatBreeds] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.thecatapi.com/v1/breeds")
            .then((res => setCatBreeds(res.data)));
    }, []);

    const displayBreeds = catBreeds.slice(0, 30).map((cat => {
        return (
            <div className="cat-item-wrapper" key={cat.id}>
                <div className="cat-item">
                    <img className="cat-image" src={cat.image.url} alt="catname" />
                    <div className="cat-content">
                        <h3 className="cat-name">{cat.name}</h3>
                        <div className="cat-desc">
                            <div className="cat-desc-origin">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span>{cat.origin}</span>
                            </div>
                            <div className="cat-desc-lifeSpan">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                <span>{cat.life_span} year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }))

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="main-container">
                    <div className="cat-list">
                        {displayBreeds}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default CatBreeds;
