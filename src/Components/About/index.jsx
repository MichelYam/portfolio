import React from 'react';
import { motion } from "framer-motion"
import img from '../../assets/img/test.png'
import './style.css'

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
                        Bonjour! je m'appelle Michel, passioné par le developpement web,
                        après une formation sur React pour me spécialiser côté Front-End,
                        je suis actuellement à la recherche d’une première expérience dans le monde du travail. Motivé et dynamique, je me tiens disponible pour un entretien.
                    </p>
                </motion.div>
                <motion.div className='charts' variants={fadeRight}>
                    <div className='container-img'>
                        <img src={img} alt="" />
                    </div>
                </motion.div>

            </motion.div>
        </>
    )
}

export default Index