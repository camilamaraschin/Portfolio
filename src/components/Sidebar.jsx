
import Avatar from '../img/foto.png'
import '../styles/sidebar.sass';
import Social from './Social';
import Informacao from './Informacao'

const Sidebar = () => {
    return (
        <aside id='sidebar'>
        <img src={Avatar} alt="Camila Maraschin Trindade" />
        <p className="title"> Desenvolvedora Frontend</p>
        <Social/>
        <Informacao/>
        <a href="https://www.canva.com/design/DAFOREo8_Is/tRf-cqBRqyHljKQd8U5RQQ/view?utm_content=DAFOREo8_Is&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
        target="blank_"
        className='btn'> Download Currículo</a>
        </aside>
    )
}

export default Sidebar