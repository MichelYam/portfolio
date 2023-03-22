import React from 'react'
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
const Contacts = () => {

    return (
        <>
            <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                variants={animation}
                transition={{ delay: 0.5 }}
            >
                <h2 className='title'>Contactez-moi</h2>
                <p>Je suis actuellement à la recherche d'une première expérience, ma boîte mail est toujours ouverte. Si vous avez une question n'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
                <a className="email" href="mailto:michel.yam92@gmail.com" rel='noopener noreferrer' target="_blank">Contactez-moi</a>
            </motion.div>
        </>
    )
}


export default Contacts