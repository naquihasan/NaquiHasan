import React from 'react'

const Portfolio = () => {
    const [header] = React.useState({
        heading: 'Portfolio',
        sub_heading: 'Portfolio Showcase',
        header_text: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry industry Lorem Ipsum standard dummy text"
    });

    const [Myportfolio] = React.useState([
        { id: 1, img: "images/portfolio/wedmallkart.png", name: "Wedmallkart Pvt Ltd", link: "https://wedmallkart.com/" },
        { id: 2, img: "images/portfolio/webtyx.png", name: "Webtyx IT Solution", link: "https://webtyx.com/" },
        { id: 3, img: "images/portfolio/modernsol.png", name: "Modern SOL", link: "https://modernsol.in/" },
        { id: 4, img: "images/portfolio/apnaprachar.png", name: "ApnaPrachar.com", link: "https://apnaprachar.com/" },
        { id: 4, img: "images/portfolio/pg3.png", name: "Pg3Entertainment", link: "https://pg3entertainment.in/" }

    ])
    return (
        <div>
            <section className='portfolio'>
                <div className='container'>
                    <div className='common'>
                        <div className='col-4'>
                            <h6>{header.heading}</h6>
                            <h2>{header.sub_heading}</h2>
                            <p>{header.header_text}</p>
                        </div>
                    </div>
                    <div className='row'>
                        
                            {
                                Myportfolio.map(portfolioValue =>
                                    <div className='col-4'>
                                    <div className='img-box'>
                                        <img src={portfolioValue.img} alt="wedmallkart Pvt Ltd" />
                                        <div className='overlay'>
                                            <h5>{portfolioValue.name}</h5>
                                            <a href={portfolioValue.link} target="_blank" className='visit'>Visit</a>
                                        </div>
                                    </div>
                                    </div>

                                )
                            }

                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio