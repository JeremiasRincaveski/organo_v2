import './Footer.css'
import logo from '../../img/logo.png'
import fb from '../../img/fb.png'
import tw from '../../img/tw.png'
import ig from '../../img/ig.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul>
                <li><img src={fb} alt='facebook'/></li>
                <li><img src={tw} alt='facebook'/></li>
                <li><img src={ig} alt='facebook'/></li>
            </ul>
            <ul>
                <li><img src={logo} alt='' /></li>
            </ul>
            <ul>
                <li>Desenvolvido por jeremias rincaveski</li>
            </ul>
        </footer>
    )
}

export default Footer