import React, { useContext } from 'react';
import '../style/Footer.scss';
import { ReactComponent as FooterCakeIcon } from '../svg/cakeFooterLogo.svg';
/* import { ReactComponent as Facebook } from '../svg/socjalFacebookIcon.svg';
import { ReactComponent as Triangle } from '../svg/triangle.svg'; */
import { ReactComponent as FacebookIcon } from '../svg/facebookIcon.svg'
import { ReactComponent as InstagramIcon } from '../svg/instagramIcon.svg'
import { BurgerMenuContext } from '../contexts/BurgerMenuContext';

const Footer = () => {
    const { burgerMenu } = useContext(BurgerMenuContext);
    return (
        <footer className={`footer ${burgerMenu && "grayScale"}`}>
            <div className="footer__authorContainer">
                <div className="authorLogo">
                    <FooterCakeIcon className="authorLogo__cakeIcon" />
                    <h1 className="authorLogo__heading">Jane Doe</h1>
                </div>
                <div className="authorData">
                    <h2 className="authorData__mail">janedoe@gmail.com</h2>
                    <h2 className="authorData__phoneNumber">653 123 754</h2>
                </div>
                {/* <Facebook /> */}
                <div className="social">
                    <div className="social__facebook">
                        <FacebookIcon className="social__icon social__icon--facebook" />
                    </div>
                    <div className="social__instagram">
                        <InstagramIcon className="social__icon social__icon--instagram" />
                    </div>
                </div>
            </div>
            <div className="websiteAuthor">
                <h1 className="websiteAuthor__heading">Autor Piotr Kłosowski</h1>
            </div>
        </footer>
    );
}

export default Footer;