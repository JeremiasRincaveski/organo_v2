import Botao from "../botao";
import Input from "../input";
import Select from "../select";
import "./Form.css";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoEnviar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

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
    </section>
  );
};

export default Formulario;
