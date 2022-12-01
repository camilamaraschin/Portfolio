import React from "react";
import{ DiHtml5, DiCss3, DiJavascript, DiReact} from  'react-icons/di'
import '../styles/tecnologias.sass'


const  tecnologias = [
   
    {id:'html', name: "HTML", icon: <DiHtml5/>, descricao:' Tags | Atributos | MetaTags | Semântica | Acessibilidade.'},
    {id:'css', name: "CSS", icon: <DiCss3/>, descricao: 'Seletores | Responsividade | FlexBox | Grid | Position.'},
    {id:'js', name: "JavaScript", icon: <DiJavascript/>, descricao:'Laços | Funções | Variáveis | Operadores | DOM . '},
    {id:'react', name: "React", icon: <DiReact/>, descricao:'Props | Hooks | Components | Router '},
    
]
const Tecnologias = () => {
    return (
             
        <section id="tecnologias">
            <h2> Tecnologias</h2>
            <div className="tecnologias-grid">
                {tecnologias.map((tech)=>(
                    <div className="tecnologia-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tecnologia-info">
                            <h3> {tech.name}</h3>  
                             <div>{tech.descricao} </div>                    
                        
                         </div>


                    </div>

                ))}

            </div>
            
        </section>
    )
}

export default Tecnologias