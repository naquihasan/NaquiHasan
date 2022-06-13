import React from 'react'
import { FaGithub, FaCodepen, FaFileVideo, FaCamera, FaApple, FaYoast } from "react-icons/fa";

export const Services = () => {
    const [header] = React.useState({
        heading: 'Services',
        sub_heading: 'My Services',
        header_text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry industry Lorem Ipsum standard dummy text"
    });



    const [state] = React.useState([{
        id:1,
        icons:FaGithub,
        headingText:"Web Development",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy text"
    },
    {
        id:2,
        icons:FaCodepen,
        headingText:"Web Design",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy text"
    },
    {
        id:3,
        icons:FaFileVideo,
        headingText:"Video Editing",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy text"
    },
    {
        id:4,
        icons:FaCamera,
        headingText:"Photography",
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text'
    },
    {
        id:5,
        icons:FaApple,
        headingText:'App Developing',
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy text"
    },
    {
        id:6,
        icons:FaYoast,
        headingText:"SEO Expert",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum standard dummy text"
    }
]);
    return (
        <>
            <section className='services'>
                <div className='container'>
                    <div className='common'>
                        <div className='col-4'>
                            <h6>{header.heading}</h6>
                            <h2>{header.sub_heading}</h2>
                            <p>{header.header_text}</p>
                        </div>
                    </div>
                    <div className='row card-content'>
                        {state.map((v)=>{
                            const Icons = v.icons;                  
                            return(
                                <div className='col-4'> 
                                    <div className='service_content'>
                                    <span><Icons/></span>
                                    <h3>{v.headingText}</h3>
                                    <p>{v.text}</p>
                                    </div>
                                </div>)
                        }
                            )}
                    </div>
                </div>
            </section>
        </>
    )
}
