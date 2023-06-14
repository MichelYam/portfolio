import React from 'react'
import "./style.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ year, link }) => {

    return (
        <footer className='footer'>
            <div className='footer-links'>
                <a href="https://github.com/MichelYam" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/michel-yam-56bba5180/" target="_blank"><FaLinkedin /></a>
            </div>
            <p> Michel YAM {year}</p>
        </footer>
    )
}

export default Footer