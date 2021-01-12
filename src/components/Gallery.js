import React, { useContext, useState } from 'react';
import '../style/Gallery.scss';
import { IsDesktopContext } from '../contexts/IsDesktopContext';
import { BurgerMenuContext } from '../contexts/BurgerMenuContext';
import Slider from "react-slick";
import galeria1 from '../images/galeria1.webp';
import galeria2 from '../images/galeria2.webp';
import galeria3 from '../images/galeria3.webp';
import galeria4 from '../images/galeria4.webp';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button type="button" onClick={onClick} className={`gallery-desktop__buttonArrow gallery-desktop__buttonArrow--right`}>
        </button>

    )
}

function SamplePreviousArrow(props) {
    const { onClick } = props;
    return (
        <button type="button" onClick={onClick} className={`gallery-desktop__buttonArrow gallery-desktop__buttonArrow--left`}>
        </button>

    )
}

const Gallery = () => {
    const gallery = [galeria1, galeria2, galeria3, galeria4];
    const cakeName = ['Klasyczny Tort', 'Urodzinowy Tort', 'Okazjonalny Tort', 'Weselny Tort']
    const { width } = useContext(IsDesktopContext);
    const { burgerMenu } = useContext(BurgerMenuContext);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePreviousArrow />,
    };
    const [imageCounter, setImageCounter] = useState(0)

    const handlePreviousImage = () => {
        if (imageCounter <= 0) {
            setImageCounter(gallery.length - 1);
        }
        else if (imageCounter >= 0) {
            setImageCounter(imageCounter - 1);
        }
    }
    const handleNextImage = () => {
        setImageCounter(imageCounter + 1);
        if (imageCounter === gallery.length - 1) {
            setImageCounter(0);
        }
    }
    return (
        <>
            {width >= 1280 ?
                <div id="gallery" className="gallery-desktop">
                    <div className="gallery-desktop__section-title"></div>
                    <Slider className="gallery-desktop__images-container" {...settings}>
                        {gallery.map((image, index) => {
                            return (
                                <div key={index} className="gallery-desktop__img-container">
                                    <img className="gallery-desktop__img" src={image} alt={cakeName[index]} />
                                    <div className="gallery-desktop__img-titleContainer">
                                        <h1 className="gallery-desktop__img-title">{cakeName[index]}</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                :
                <div id="gallery" className={`gallery ${burgerMenu && 'grayScale'}`}>
                    <div className="gallery__section-title"></div>
                    <div className="gallery__images-container">
                        <div className="gallery__img-container">
                            <button onClick={handlePreviousImage} className="gallery__arrow gallery__arrow--left"></button>
                            <img className="gallery__img" src={gallery[imageCounter]} alt={cakeName[imageCounter]} />
                            <button onClick={handleNextImage} className="gallery__arrow gallery__arrow--right"></button>
                        </div>
                        <div className="gallery__img-titleContainer">
                            <h1 className="gallery__img-title">{cakeName[imageCounter]}</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Gallery;