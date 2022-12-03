import React from 'react';
import "./about.css";
import Info from './Info';
import AboutImg from "../../assets/about.png";


const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Us</h2>
        <span className="section__subtitle">We are not an IT Firm; we are an Ideation Agency.</span>

        <div className="about__container container grid">
            <img src={AboutImg} className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">Established in 2021, Cyatt is a team of creators, thinkers and researchers aiming to solve business challenges via developing future-ready apps, websites and digital solutions for our clients.
                <br></br><br></br> We assist our clients in developing innovative designs and thoughtful products by offering premium IT solutions.</p>
                <a className="button button--flex">Know More</a>
            </div>
        </div>
    </section>
  )
}

export default About
