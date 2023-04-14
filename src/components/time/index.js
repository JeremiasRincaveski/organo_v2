import Colaborador from '../colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: hexToRgba(props.cor, 0.6)}}>
            <h3 style={{color: props.cor}}>{props.nome}</h3>
            <input value={props.cor} onChange={evento => props.aoMudarCor(props.id, evento.target.value)} type='color' className='color' />
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => 
                <Colaborador 
                    id={colaborador.id}
                    aoDeletar={props.aoDeletar}
                    corFundo={props.cor}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    favorito={colaborador.favorito}
                    aoFavoritar={props.aoFavoritar}
                />
            )}
            </div>
        </section>//
    )
}

export default Time