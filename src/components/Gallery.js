import React from 'react';
import '../style/Gallery.scss';
import galeria1 from '../images/galeria1.png';
const Gallery = () => {
    return ( 
        <div className="gallery">
            <div className="gallery__section-title"></div>
            <div className="gallery__images-container">
                <div className="gallery__img-container">
                    <img className="gallery__img" src={galeria1} alt=""/>
                </div>
                <div className="gallery__img-titleContainer">
                    <h1 className="gallery__img-title">Klasyczny tort</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Gallery;