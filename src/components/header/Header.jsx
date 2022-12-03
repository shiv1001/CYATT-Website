import React from 'react';
import "./header.css";
import { useState } from "react";
import {AiOutlineHome} from "react-icons/ai";
import {FiUsers} from "react-icons/fi";
import {AiOutlineCloudServer} from "react-icons/ai"
import {AiOutlineFileDone} from "react-icons/ai";
import {AiOutlineContacts} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineAppstore} from "react-icons/ai";
import logo from "../../assets/logo.png";

const Header = () => {
    const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                <img src={logo} />
            </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                           <i className="nav__icon"><AiOutlineHome /></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="nav__icon"><FiUsers /></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="nav__icon"><AiOutlineCloudServer /></i> Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="nav__icon"><AiOutlineFileDone /></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="nav__icon"><AiOutlineContacts /></i> Contact
                        </a>
                    </li>
                </ul>
                <div className="nav__list">
                <div className="nav__close"><AiOutlineClose /></div>
                </div>
                <div className="nav__list">
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <AiOutlineAppstore />
                </div></div>
            </div>
        </nav>
    </header>
  )
}

export default Header
