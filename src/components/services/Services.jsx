import React from 'react';
import {useState} from "react";
import "./services.css";
import App from "../../assets/service/app.png"
import Ui from "../../assets/service/ui.png"
import Seo from "../../assets/service/seo.png"
import Web from "../../assets/service/web.png"


const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab =(index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">We provide a variety of services</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="services__icon"><svg width="40px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--title-color)" d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22,1,1,0,0,0,.21-1.09A1,1,0,0,0,12.71,16.29ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></i>
                    <h3 className="services__title"> App <br></br>Development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>Know More<i className="uil uil-arrow-right services__button-icons"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="services__modal-close">
                            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path 
                                        fill="#000000" 
                                        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                            </svg>
                        </i>
                        <h1 className="services__modal-title">App Development</h1>
                        <img className="services__modal-img" src={App} alt="" />
                        <h3 className="services__modal-subtitle">Mobile Apps That Serve A Purpose</h3>
                        <p className="services__modal-description">Mobile applications can take your business to a new level. Every business wants to enhance its audience base, brand awareness, sales, and revenue. A mobile application assists your business to target consumers across the world. We at Cyatt aim to provide our clients with Android App development and iOS app development in India. With a team of highly skilled and dedicated developers with are one of the best app development companies in India.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                        </ul>
                        <div className="services__modal-container container grid">
                            <div className="services__modal-container-content">
                                <h3 className="services__modal-container-title">
                                    Transport & Logistics
                                </h3>
                            </div>
                        </div>
                        <div className="services__modal-container container grid">
                            <div className="services__modal-container-content">
                                <h3 className="services__modal-container-title">
                                    Laundry Management
                                </h3>
                            </div>
                        </div>
                        <div className="services__modal-container container grid">
                            <div className="services__modal-container-content">
                                <h3 className="services__modal-container-title">
                                    E-Commerce 
                                </h3>
                            </div>
                        </div>
                        <div className="services__modal-container container grid">
                            <div className="services__modal-container-content">
                                <h3 className="services__modal-container-title">
                                    Booking Service
                                </h3>
                            </div>
                        </div>
                        <div className="services__modal-container container grid">
                            <div className="services__modal-container-content">
                                <h3 className="services__modal-container-title">
                                    Social & Communication
                                </h3>
                            </div>
                        </div>
                        <div className="services__modal-container container grid">
                            <div className="services__modal-container-content">
                                <h3 className="services__modal-container-title">
                                    Business Enterprise
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="services__icon"><svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var()--title-color" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg></i>
                    <h3 className="services__title">UI/UX & <br></br> Branding</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>Know More <i className="uil uil-arrow-right services__button-icons"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="services__modal-close">
                            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path 
                                        fill="#000000" 
                                        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                            </svg>
                        </i>
                        <img src={Ui} alt="" />
                        <h3 className="services__modal-title">UI/UX & Branding</h3>
                        <p className="services__modal-description"></p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil services__icon">
                      <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--title-color)" d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"/></svg>
                    </i>
                    <h3 className="services__title">SEO & <br></br> SSM</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>Know More <i className="uil uil-arrow-right services__button-icons"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="services__modal-close">
                            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path 
                                        fill="#000000" 
                                        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                            </svg>
                        </i>
                        <img src={Seo} alt="" />
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">Hell lot of Gang shit in India</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="services__icon"><svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--tittle-color)" d="M10,5a1,1,0,1,0,1,1A1,1,0,0,0,10,5ZM6,5A1,1,0,1,0,7,6,1,1,0,0,0,6,5Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5Zm6-4H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1Zm1,19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11H21ZM21,9H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1Z"/></svg></i>
                    <h3 className="services__title">Web <br></br> Development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(4)}>Know More<i className="uil uil-arrow-right services__button-icons"></i></span>
                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="services__modal-close">
                            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path 
                                        fill="#000000" 
                                        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                            </svg>
                        </i>
                        <img src={Web} alt="" />
                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">Hell lot of Gang shit in India</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="services__icon">
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--title-color)" d="M19.63,3.65a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39Z"/></svg>
                    </i>
                    <h3 className="services__title">Cybersecurity <br></br> Services</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(5)}>Know More <i className="uil uil-arrow-right services__button-icons"></i></span>
                <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="services__modal-close">
                            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path 
                                        fill="#000000" 
                                        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                            </svg>
                        </i>

                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">Hell lot of Gang shit in India</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="services__icon">
                        <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="var(--title-color)" d="M8,16.5a1,1,0,1,0,1,1A1,1,0,0,0,8,16.5ZM12,2C8,2,4,3.37,4,6V18c0,2.63,4,4,8,4s8-1.37,8-4V6C20,3.37,16,2,12,2Zm6,16c0,.71-2.28,2-6,2s-6-1.29-6-2V14.73A13.16,13.16,0,0,0,12,16a13.16,13.16,0,0,0,6-1.27Zm0-6c0,.71-2.28,2-6,2s-6-1.29-6-2V8.73A13.16,13.16,0,0,0,12,10a13.16,13.16,0,0,0,6-1.27ZM12,8C8.28,8,6,6.71,6,6s2.28-2,6-2,6,1.29,6,2S15.72,8,12,8ZM8,10.5a1,1,0,1,0,1,1A1,1,0,0,0,8,10.5Z"/></svg>
                    </i>
                    <h3 className="services__title">Software<br></br> Development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(6)}>Know More <i className="services__button-icons"></i></span>
                <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="services__modal-close">
                            <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path 
                                        fill="#000000" 
                                        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/>
                            </svg>
                        </i>

                        <h3 className="services__modal-title"></h3>
                        <p className="services__modal-description">SaaS</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-item"></i>
                                <p className="services__modal-info">We help branding your business</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
