const Select = (props) => {
    
    return (
        <div>
            <label className='label' htmlFor='times'>Time</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.value} className='input' id='times'>
                    <option value=''></option>
                    {props.times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default Select