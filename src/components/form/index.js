import Botao from "../botao";
import Input from "../input";
import Select from "../select";
import "./Form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [novoTime, setNovoTime] = useState('')
  const [novaCor, setNovaCor] = useState('')

  const aoEnviar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time,
        id: uuidv4(),
        favorito: false
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const aoNovoTime = (evento) => {
    evento.preventDefault();
    props.aoNovoTimeAdicionado({
        nome: novoTime,
        cor: novaCor,
        id: uuidv4()
    })

    setNovoTime('')
    setNovaCor('')
  }

  return (
    <section>
      <form onSubmit={aoEnviar}>
        <legend>Preencha os dados para criar o card do colaborador</legend>
        <Input
            obrigatorio={true}
            label="Nome"
            placeholder="Digite o seu nome"
            value={nome}
            aoAlterado={evento => setNome(evento)}
        />
        <Input
            obrigatorio={true}
            label="Cargo"
            placeholder="Digite o seu cargo"
            value={cargo}
            aoAlterado={evento => setCargo(evento)}
        />
        <Input 
            label="imagem" 
            placeholder="informe o endereço da imagem" 
            value={imagem}
            aoAlterado={evento => setImagem(evento)}
            />
        <Select 
            times={props.times}
            value={time}
            aoAlterado={evento => setTime(evento)}
        />
        <Botao texto={"Criar card"} />
      </form>
      <form onSubmit={aoNovoTime}>
        <legend>Preencha os dados para criar um novo time</legend>
        <Input
            obrigatorio
            label="Nome"
            placeholder="Digite o nome do time"
            value={novoTime}
            aoAlterado={evento => setNovoTime(evento)}
        />
        <Input
            obrigatorio
            label="Cor"
            placeholder="Digite a cor do time"
            value={novaCor}
            aoAlterado={evento => setNovaCor(evento)}
        />
        <Botao texto={"Criar card"} />
      </form>
    </section>
  );
};

export default Formulario;
