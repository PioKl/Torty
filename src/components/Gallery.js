import React, { useContext } from 'react';
import '../style/Gallery.scss';
import { IsDesktopContext } from '../contexts/IsDesktopContext';
import Slider from "react-slick";
import galeria1 from '../images/galeria1.png';

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
    const { width } = useContext(IsDesktopContext);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePreviousArrow />,
    };
    return (
        <>
            {width >= 1280 ?
                <div id="gallery" className="gallery-desktop">
                    <div className="gallery-desktop__section-title"></div>
                    {/* <div className="gallery-desktop__images-container"> */}
                    <Slider className="gallery-desktop__images-container" {...settings}>
                        <div className="gallery-desktop__img-container">
                            <img className="gallery-desktop__img" src={galeria1} alt="" />
                            <div className="gallery-desktop__img-titleContainer">
                                <h1 className="gallery-desktop__img-title">Klasyczny Tort</h1>
                            </div>
                        </div>
                        <div className="gallery-desktop__img-container">
                            <img className="gallery-desktop__img" src={galeria1} alt="" />
                            <div className="gallery-desktop__img-titleContainer">
                                <h1 className="gallery-desktop__img-title">Klasyczny Tort</h1>
                            </div>
                        </div>
                        <div className="gallery-desktop__img-container">
                            <img className="gallery-desktop__img" src={galeria1} alt="" />
                            <div className="gallery-desktop__img-titleContainer">
                                <h1 className="gallery-desktop__img-title">Klasyczny Tort</h1>
                            </div>
                        </div>
                        <div className="gallery-desktop__img-container">
                            <img className="gallery-desktop__img" src={galeria1} alt="" />
                            <div className="gallery-desktop__img-titleContainer">
                                <h1 className="gallery-desktop__img-title">Klasyczny Tort</h1>
                            </div>
                        </div>
                    </Slider>
                    {/* </div> */}
                </div>
                :
                <div className="gallery">
                    <div className="gallery__section-title"></div>
                    <div className="gallery__images-container">
                        <div className="gallery__img-container">
                            <button className="gallery__arrow gallery__arrow--left"></button>
                            <img className="gallery__img" src={galeria1} alt="" />
                            <button className="gallery__arrow gallery__arrow--right"></button>
                        </div>
                        <div className="gallery__img-titleContainer">
                            <h1 className="gallery__img-title">Klasyczny tort</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Gallery;