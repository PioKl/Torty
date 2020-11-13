import React, {useContext} from 'react';
import '../style/Offer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IsDesktopContext } from '../contexts/IsDesktopContext';
import kucharz from "../images/kucharzMobile.png";
import offerWave from "../images/offerWave.png";
import Slider from "react-slick";
/* import { ReactComponent as ArrowRight } from '../svg/arrowRight.svg'; */
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
           <button type="button" onClick={onClick} className={`offer-desktop__buttonArrow offer-desktop__buttonArrow--right`}>
           </button>
           
    )
  }

  function SamplePreviousArrow(props) {
    const { onClick } = props;
    return (
           <button type="button" onClick={onClick} className={`offer-desktop__buttonArrow offer-desktop__buttonArrow--left`}>
           </button>
           
    )
  }

const Offer = () => {
    const { width } = useContext(IsDesktopContext);

/*     const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,  
      }; */
      const settings = {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        speed: 500,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePreviousArrow/>,
      };

    return ( 
        <>
        {width >= 1280 ? 
            <div className="offer-desktop">
                <div className="offer-desktop__left-side">
                    <img className="offer-desktop__img" src={kucharz} alt=""/>
                </div>
                <div className="offer-desktop__right-side">
                    <div className="offer-desktop__section-title">

                    </div>
                    <div className="offer-desktop__offers-container">
                    <Slider className="offer-desktop__offers-slider" {...settings}>
                        <div className="offer-desktop__slider-item">
                            <div className="offer-desktop__cake offer-desktop__specialCake"></div>
                            <h2 className="offer-desktop__cake-title offer-desktop__specialCake-title">Torty</h2>
                            <div className="offer-desktop__details">
                                <div className="offer-desktop__detail offer-desktop__detail--specialCakeNormal">
                                    <div className="offer-desktop__detail-icon offer-desktop__detail-icon--specialCakeNormal"></div>
                                    <h3 className="offer-desktop__detail-title offer-desktop__detail-title-specialCakeNormal">zwykłe</h3>
                                </div>
                                <div className="offer-desktop__detail offer-desktop__detail--specialCakeThematic">
                                    <div className="offer-desktop__detail-icon offer-desktop__detail-icon--specialCakeThematic"></div>
                                    <h3 className="offer-desktop__detail-title offer-desktop__detail-title-specialCakeThematic">tematyczne</h3>
                                </div>
                                <div className="offer-desktop__detail offer-desktop__detail--specialCakeWedding">
                                    <div className="offer-desktop__detail-icon offer-desktop__detail-icon--specialCakeWedding"></div>
                                    <h3 className="offer-desktop__detail-title offer-desktop__detail-title-specialCakeWedding">weselne</h3>
                                </div>
                            </div>
                        </div>
                        <div className="offer-desktop__slider-item">
                            <div className="offer-desktop__cake offer-desktop__commonCake"></div>
                            <h2 className="offer-desktop__cake-title offer-desktop__commonCake-title">Ciasta</h2>
                            <div className="offer-desktop__details offer-desktop__details--commonCake">
                                <div className="offer-desktop__detail offer-desktop__detail--commonCakeTraditional">
                                    <div className="offer-desktop__detail-icon offer-desktop__detail-icon--commonCakeTraditional"></div>
                                    <h3 className="offer-desktop__detail-title offer-desktop__detail-title-commonCakeTraditional">tradycyjne</h3>
                                </div>
                                <div className="offer-desktop__detail offer-desktop__detail--commonCakeDessert">
                                    <div className="offer-desktop__detail-icon offer-desktop__detail-icon--commonCakeDessert"></div>
                                    <h3 className="offer-desktop__detail-title offer-desktop__detail-title-commonCakeDessert">
                                        deserowe
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="offer-desktop__slider-item">
                            <div className="offer-desktop__cake offer-desktop__cupCake"></div>
                            <h2 className="offer-desktop__cake-title offer-desktop__cupCake-title">Babeczki</h2>
                        </div>
                        <div className="offer-desktop__slider-item">
                            <div className="offer-desktop__cake offer-desktop__occasional"></div>
                            <h2 className="offer-desktop__cake-title offer-desktop__occasional-title">Wyroby okazjonalne</h2>
                        </div>

                    </Slider>
                    </div>
                </div>
            <div className="offer-desktop__wave">
                    <img src={offerWave} alt="" className="offer-desktop__wave-img"/>
                </div>
            </div>
            :
        <div className="offer">
            <div className="offer__section-title"></div>
            <div className="offer__content">
                <div className="offer__left-side">
                    <img className="offer__img" src={kucharz} alt=""/>
                </div>
                <div className="offer__right-side">
                    <ul className="offer__offers-list">
                        <ul className="offer__cakes-list">
                            <li className="offer__cake offer__cake--icon offer__cake--title offer__specialCake--title">Torty</li>
                            <li className="offer__cake offer__cake--icon offer__cake--item offer__specialCake--normal">zwykłe</li>
                            <li className="offer__cake offer__cake--icon offer__cake--item offer__specialCake--wedding">weselne</li>
                            <li className="offer__cake offer__cake--icon offer__cake--item offer__specialCake--thematic">tematyczne</li>
                            <span className="offer__barrier"></span>
                        </ul>
                        <ul className="offer__commonCakes-list">
                            <li className="offer__cake offer__cake--icon offer__cake--title offer__commonCake  offer__commonCake--title">Ciasta</li>
                            <li className="offer__cake offer__cake--icon offer__cake--item offer__commonCake  offer__commonCake--traditional">tradycyjne</li>
                            <li className="offer__cake offer__cake--icon offer__cake--item offer__commonCake  offer__commonCake--dessert">deserowe</li>
                            <span className="offer__barrier"></span>
                        </ul>
                        <ul className="offer__cupCakes-list">
                            <li className="offer__cake offer__cake--icon offer__cake--title offer__cupCake  offer__cupCake--title">Babeczki</li>
                            <span className="offer__barrier"></span>
                        </ul>
                        <ul className="offer__occasional-list">
                            <li className="offer__cake offer__cake--icon offer__cake--title offer__occasional  offer__occasional--title">Wyroby okazjonalne</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="offer__wave">
                <img src={offerWave} alt="" className="offer__wave-img"/>
            </div>
        </div>
        }
        </>
     );
}
 
export default Offer;
