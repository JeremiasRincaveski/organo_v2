import Banner from "./components/banner";
import './app.css'
import Formulario from "./components/form";
import Container from "./components/container";
import { useState } from "react";
import Time from "./components/time";
import Footer from "./components/footer";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    }
  ])

  const aoDeletarColaborador = (id) => {
    console.log('aq chegou')
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'jeremias',
      cargo: 'estudante',
      imagem: 'http://github.com/jeremiasrincaveski.png',
      time: 'Front-End',
      favorito: false 
    },
    {
      id: uuidv4(),
      nome: 'rinc',
      cargo: 'estudante',
      imagem: 'http://github.com/jeremiasrincaveski.png',
      time: 'Front-End',
      favorito: false 
    },
    {
      id: uuidv4(),
      nome: 'jer',
      cargo: 'estudante',
      imagem: 'http://github.com/jeremiasrincaveski.png',
      time: 'Front-End',
      favorito: false 
    },
  ])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const aoNovoTimeAdicionado = (time) => {
    setTimes([...times, time])
  }

  const aoMudarCorDoTime = (id, cor) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }
  
  const aoMudarFavoritoDoTime = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }
  ))}
  return (
   <>
    <Banner />
    <Container>
      <Formulario  
        aoNovoTimeAdicionado={time => aoNovoTimeAdicionado(time)}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => 
        <Time 
          aoMudarCor={aoMudarCorDoTime}
          id={time.id}
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={aoDeletarColaborador}
          aoFavoritar={aoMudarFavoritoDoTime}
        />)}
    </Container>
    <Footer />
   </>
  );
}

export default App;
