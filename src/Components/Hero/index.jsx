import React from 'react'
import { motion } from "framer-motion";

import './style.css'
const textAnimate = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5
        }
    }
}
const index = () => {
    return (
        <section className="hero">
            <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <motion.div variants={textAnimate}>
                    <h1>
                        Bonjour je m'appelle
                    </h1>
                </motion.div>
                <motion.div variants={textAnimate}>
                    <h2 className='big-heading'>
                        YAM Michel
                    </h2>
                </motion.div>
                <motion.div variants={textAnimate}>
                    <h3 className='big-heading'>
                        Développeur web Junior
                    </h3>
                </motion.div>
                <motion.div className='btn-info' variants={textAnimate}>
                    <a className='link' href="mailto:michel.yam92@gmail.com" rel='noopener noreferrer' target="_blank">
                        Contactez-moi
                    </a>
                    <a className='link' href="../../data/CV_Michel_YAM.pdf" download>
                        CV
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default index