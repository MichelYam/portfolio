import React from 'react'
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
    return (
        <>
            {/* <Modal onClose={toggleModal} open={isOpen}>
                <div className='modal-title'>
                    {title}
                </div>
                <div className='modal-content'>
                    {description}
                </div>
                <div className='keyword'>
                    {keyword.map((item, index) =>
                        <span key={index} className="keyword-item">{item}</span>
                    )}
                </div>
            </Modal> */}
            {/* <div className='project-item'>
                <div className="project-item-content" onClick={() => setIsOpen(true)}>
                    <img src={`./assets/img/projects/${img}.png`} alt={title} />
                    <span>{title}</span>
                </div>
            </div> */}

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
                        <img src={`./assets/img/projects/${img}.png`} alt={title} />
                    </a>
                </div>
                <div className="project-content">
                    <h3 className='project-title'>
                        <a href="#">
                            {title}
                        </a>
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