import React, { useState } from 'react'

export const Expert = () => {
    const [header] = React.useState({
        heading: "I'M EXPERT ON",
        sub_heading: "Let's Work Together",
        header_text: "Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"
    });


    const [mySkills] = React.useState([
        {id:1, className:"html", percentage:"85%",skillName:"Html"},
        {id:1, className:"css", percentage:"80%",skillName:"Css"},
        {id:1, className:"javascript", percentage:"60%",skillName:"JavaScript"},
        {id:1, className:"bootstrap", percentage:"87%",skillName:"Bootstrap"},
        {id:1, className:"tailwind", percentage:"55%",skillName:"Tailwind Css"},
    ])

  return (
    <div>
        <section className='expert'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='common_side left__side'>
                            <div className='col-12'>
                                <h6>{header.heading}</h6>
                                <h2>{header.sub_heading}</h2>
                                <p>{header.header_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='my__skills'>
                            {
                                mySkills.map(skill=>
                                    <div className='skills'>
                                    <p>{skill.skillName}</p>
                                    <div className='skills_bar'>
                                        <div className={skill.className}>
                                            <span>{skill.percentage}</span>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
