import React from 'react';
import '../style/Offer.scss';
import kucharz from "../images/kucharzMobile.png";
/* import { ReactComponent as OfferWave } from '../svg/offerWave.svg'; */
import offerWave from "../images/offerWave.png";

const Offer = () => {
    return ( 
        <div className="offer">
            <div className="offer__section-title"></div>
            <div className="offer__content">
{/*                 <div className="offer__section-title">
                </div> */}
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
            {/* <OfferWave className="offer__wave"/> */}
            <div className="offer__wave">
                <img src={offerWave} alt="" className="offer__wave-img"/>
            </div>
        </div>
     );
}
 
export default Offer;
