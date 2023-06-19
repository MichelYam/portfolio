import React from 'react'
import Project from "../Project"

import './style.css'

export default function Projects({ projects }) {
    return (
        <>
            <div className='section-title'>
                <h2>Projets</h2>
            </div>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </>
    )
}

