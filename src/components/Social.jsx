import React from "react";
import '../styles/social.sass'

import {FaLinkedinIn, FaGithub, FaInstagram, FaCodepen} from 'react-icons/fa'


const social = [
    {name: 'linkedin', url:'https://www.linkedin.com/in/camilamaraschin/' ,icon: <FaLinkedinIn/>},
    {name: 'github',url:'https://github.com/camilamaraschin' , icon: <FaGithub/>},
    {name: 'instagram',url:'https://www.instagram.com/camilamaraschin_/' , icon: <FaInstagram/>},
    {name: 'codepen', url:'https://codepen.io/camilamaraschin' , icon: <FaCodepen/>},
];

const Social = () => {
    return (
        <section id="social-networks">
        
            {social.map((network, index)=> (
                <a href={network.url} className="social-btn" id={network.linkedin} key={index} target='_blank'>
                {network.icon}

                </a>
                

                
                
            ))}
        </section>
    )
}

export default Social