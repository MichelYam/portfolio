import React from 'react'
import { motion } from "framer-motion"
import html from '../../assets/img/icon/html.svg'
import css from '../../assets/img/icon/css.svg'
import react from '../../assets/img/icon/react.svg'
import js from '../../assets/img/icon/js.svg'
import typescript from '../../assets/img/icon/typescript.svg'
import redux from '../../assets/img/icon/redux.svg'
import mongodb from '../../assets/img/icon/mongodb.svg'
import nodejs from '../../assets/img/icon/nodejs.svg'
import './style.css'

const textAnimate = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            // type: "spring",
            duration: 1
        }
    }
}
const skills = [
    html,
    css,
    js,
    react,
    typescript,
    nodejs,
    redux,
    mongodb,
]
const Skills = () => {
    return (
        <>
            <p>Voici quelques technologies avec lesquelles j'ai travaillé :</p>
            <div className="skills">
                <motion.ul
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {skills.map((item, index) => (
                        <motion.li key={index} variants={textAnimate}>
                            <div className='icon-shape'>
                                <img className='icon' src={item} alt={item} />
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </>
    )
}

export default Skills