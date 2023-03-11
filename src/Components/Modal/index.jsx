import React, { useEffect } from 'react'
import ReactDom from 'react-dom'

import { FaTimes } from 'react-icons/fa'
import './style.css';

export const Modal = ({ children, onClose, open, title, test }) => {

    // useEffect(() => {
    //     const onKeyDown = (event) => {
    //         if (event.keyCode === 27) {
    //             // Close the modal when the Escape key is pressed
    //             onClose();
    //         }
    //     }
    //     document.body.style.overflow = "hidden";
    //     document.addEventListener("keydown", onKeyDown);

    //     return () => {
    //         document.body.style.overflow = "visible";
    //         document.removeEventListener("keydown", onKeyDown);
    //     };
    // }, [])   
    if (!open) return null
    console.log(test);
    return ReactDom.createPortal(
        <>
            <div className="modal__backdrop">
                <div className="modal__container">
                    <h3 className="modal__title">I'm a modal!</h3>
                    <div className='modal-close' onClick={onClose}>
                        <FaTimes />
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}