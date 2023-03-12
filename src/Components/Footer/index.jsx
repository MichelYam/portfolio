import React from 'react'
import "./style.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ year, link }) => {

    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href="https://github.com/MichelYam" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/michel-yam-56bba5180/" target="_blank"><FaLinkedin /></a>
            </div>
            <p>Copyright © Michel YAM {year}</p>
        </div>
    )
}

export default Footer