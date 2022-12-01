import { AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import React from "react";
import '../styles/informacao.sass'


const informacao = () => {
    return (
        <section id='informacao'>
        
        <div className='info-card'>  
        <AiOutlineMail id='email-icon'/>
        <div>
        <h3>Email:</h3>
        <p> camilapb11@hotmail.com</p>
        </div>
        </div>

        <div className='info-card'>  
        <AiFillEnvironment id='pin-icon'/>
        <div>
        <h3>Localização:</h3>
        <p> João Pessoa - Paraíba </p>
        </div>
        </div>



        </section>
    )
}

export default informacao