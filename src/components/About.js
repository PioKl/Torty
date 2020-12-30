import React from 'react';
import '../style/About.scss';
import person from '../images/personPhoto.png';
import aboutWaveTop from '../images/aboutWaveTop.png';
const About = () => {
    return (
        <div className="about">
            <div className="about__section-title"></div>
            <div className="story">
                <figure className="story__shape">
                    <img className="story__img" src={person} alt="person" />
                    <figcaption className="story__caption">Jane Doe</figcaption>
                </figure>
                <span className="story__barrier"></span>
                <p className="story__description">Vestibulum suscipit, dolor eu pretium maximus, justo mi blandit turpis, a volutpat mauris nisl vitae purus. I, eleifend luctus tellus. Fusce luctus metus vitae dui ornare luctus. Curabitur condimentum bibendum lectus, sed efficitur mauris convallis nec. Morbi imperdiet purus ac ante molestie, ac ultrices urna gravida. </p>
            </div>
            <img className="about__waveTop" src={aboutWaveTop} alt="" />
        </div>
    );
}

export default About;