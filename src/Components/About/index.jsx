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
                        Mauris quis condimentum turpis. Sed porta, risus sit amet mattis iaculis, turpis arcu tincidunt eros, quis luctus eros metus at mauris.
                        Integer sagittis, tellus at facilisis tincidunt, tortor libero luctus urna, sit amet sodales libero nisi vel nisl. Praesent in tincidunt tortor.
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