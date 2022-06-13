import React from 'react'
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const [header] = React.useState({
        heading: 'HAVE ANY QUERY?',
        sub_heading: 'Contact Me',
        header_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text."
    });
    return (
        <div>
            <section className='contact'>
                <div className='container'>
                    <div className='common'>
                        <div className='col-4'>
                            <h6>{header.heading}</h6>
                            <h2>{header.sub_heading}</h2>
                            <p>{header.header_text}</p>
                        </div>
                    </div>
                    <div className='row card-content'>
                        <div className='col-4'>
                            <div className='contact__content'>
                                <div className='left__side'>
                                    <span><FaLocationArrow/></span>
                                </div>
                                <div className='right__side'>
                                    <h5>Locate me</h5>
                                    <p>King Street, Melbourne Victorias</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='contact__content margin__between'>
                                <div className='left__side'>
                                    <span><FaPhoneAlt /></span>
                                </div>
                                <div className='right__side'>
                                    <h5>Give me Call</h5>
                                    <p>Office: +01-2345-6789</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='contact__content'>
                                <div className='left__side'>
                                    <span><FaEnvelope /></span>
                                </div>
                                <div className='right__side'>
                                    <h5>Get in online</h5>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact