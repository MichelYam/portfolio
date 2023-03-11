import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import './style.css'
const animation = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}
function Contacts() {


    return (
        <>
            <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                variants={animation}
                transition={{ delay: 0.5 }}>
                <h2 className='title'>Get In Touch</h2>
                <p>I'm currently looking for new opportunities, my inbox is always open. If you have a question do not hesitate to contact me, I will answer you as soon as possible.</p>
                <a className="email" href="mailto:michel.yam92@gmail.com" rel='noopener noreferrer' target="_blank">Contact me</a>
            </motion.div>
        </>
    )
}


export default Contacts