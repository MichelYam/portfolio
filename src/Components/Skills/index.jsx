import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion"
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
export const skills = [
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    SiTypescript,
    FaNodeJs,
]
const Skills = () => {
    return (
        <>
            <div className='section-title'>
                <h2>Skills</h2>
            </div>
            <div className="skills">
                <motion.ul
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {skills.map((item, index) => {
                        const Icon = item;
                        console.log(item);
                        return (
                            <motion.li key={index} variants={textAnimate}>
                                <Icon />
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </div>
        </>
    )
}

export default Skills