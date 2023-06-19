import React from 'react';
import { motion } from "framer-motion"
import Skills from "../Skills/index"
// import img from '../../assets/img/test.png'
import './style.css'
import img from "../../assets/img/lucas-kapla.jpg"

const fadeLeft = {
    offscreen: { x: -30, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5
        }
    }
}
const fadeRight = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5
        }
    }
}
const Index = () => {

    return (
        <>
            <motion.div
                className="about-container"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5 }}
            >
                <motion.div
                    className='text-zone'
                    variants={fadeLeft}
                >
                    <h2>About me</h2>
                    <p>
                        Bonjour ! je m'appelle Michel, passioné par le developpement web,<br />
                        après une formation sur React pour me spécialiser côté Front-End,
                        je suis actuellement à la recherche d’une première expérience dans le monde du travail. Motivé et dynamique, je me tiens disponible pour un entretien.
                    </p>
                    <motion.div variants={fadeRight}>
                        <Skills />
                    </motion.div>
                </motion.div>
                <motion.div className='img-custom' variants={fadeRight}>
                    <img src={img} alt="image" />
                </motion.div>
            </motion.div>
        </>
    )
}

export default Index