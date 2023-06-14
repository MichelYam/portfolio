import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import "./style.css"

const animation = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            // bounce: 0.4,
            duration: 1.5
        }
    }
}

const Index = ({ title, context, description, keyword, img, site, github }) => {
    const [currentImage, setCurrentImage] = useState("");
    import(`../../assets/img/projects/${img}.png`).then((image) =>
        setCurrentImage(image.default)
    );
    return (
        <>
            <motion.div
                className="project-item"
                variants={animation}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
            >
                <div className='project-img'>
                    <a href="#">
                        <img src={currentImage} alt={title} />
                    </a>
                </div>
                <div className="project-content">
                    <h3 className='project-title'>
                        {title}
                    </h3>
                    <div className='project-description'>
                        <p>{context}</p>
                        <p>{description}</p>
                    </div>
                    <ul className='project-tech-list'>
                        {keyword.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                    <div className='project-links'>
                        <a href={github} target="_blank">
                            <FaGithub />
                        </a>
                        {site && <a href="#" target='_blank'><FaExternalLinkAlt /></a>}
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Index