import React from 'react'

const About = () => {

    const [header] = React.useState({
        sub_heading: 'About Me',
        header_text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry industry Lorem Ipsum standard dummy text"
    });

    const [textHeader] = React.useState({
        heading: 'Hi There',
        pText1: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry industry Lorem Ipsum standard dummy text",
        pText2: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry industry Lorem Ipsum standard dummy text"
    });

    const [state] = React.useState([
        { id: 1, title: "Name:", value: "Naqui Hasan" },
        { id: 1, title: "Phone:", value: "8851050712" },
        { id: 1, title: "Email:", value: "naquijmi.com" },
        { id: 1, title: "LinkedIn:", value: "https://www.linkedin.com/in/naqui-hasan-889765185/" },

    ])
    return (
        <div className='about'>
            <div className='container'>
                <div className='common'>
                    <div className='col-4'>
                        <h2>{header.sub_heading}</h2>
                        <p>{header.header_text}</p>
                    </div>
                </div>
                <div className='row row_height'>
                    <div className='col-6'>
                        <div className='img__part'>
                            <img src="images/naqui.png" alt="man-02" style={{ width: 270,height:500 }} />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='text__part'>
                            <h3>{textHeader.heading}</h3>
                            <p className='p__1'>{textHeader.pText1}</p>
                            <p className='p__2'>{textHeader.pText2}</p>
                        </div>
                        <div className='contact__info'>
                            <div class="row">
                                {state.map(info => (
                                    <div className='col-6'>
                                        <strong>{info.title}</strong>
                                        <p>{info.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About