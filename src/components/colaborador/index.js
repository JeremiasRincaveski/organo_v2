import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ nome, cargo, imagem, corFundo, aoDeletar, id, favorito, aoFavoritar }) => {
    return (
            <div id={id} className='colaborador'> 
                <AiFillCloseCircle
                    size={25} 
                    className='deletar' 
                    onClick={() => aoDeletar(id)}
                />
                <div className='cabecalho' style={{backgroundColor: corFundo}}>
                    <img src={imagem} alt='imagem do colaborador'/>
                </div>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                    {favorito ? <AiFillHeart onClick={() => aoFavoritar(id)} /> : <AiOutlineHeart onClick={() => aoFavoritar(id)} />}
                </div>
            </div>
    )
}

export default Colaborador