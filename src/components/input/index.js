import './input.css'

const Input = (props) => {

    const aoDigitado = evento => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div>
            <label className='label' htmlFor={props.label}>{props.label}</label>
            <input 
                value={props.value} 
                required={props.obrigatorio} 
                className='input' 
                id={props.label} 
                placeholder={props.placeholder} 
                onChange={aoDigitado}
            />
        </div>
    )
}

export default Input