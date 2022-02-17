import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { api } from '../services/api'

import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';
import Globals from '../global/styles'
import dark from '../global/themes/dark';
import light from '../global/themes/light';

import { Container } from '../global/LoginStyle';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [theme, setTheme] = useState(dark)
  let navigate = useNavigate();
  function changeRoute(){
    navigate(`/enviaPost`)
  }

  const toggleTheme = () => setTheme(theme.title === 'light'? dark : light)
  
  async function Logar(event: FormEvent) {
    event.preventDefault()
    const response = await api.post('login', {password, email})

     setEmail('')
     setPassword('')
     if(response.data){
      changeRoute()
      return
     }
     alert("senha ou email incorreto")
  }

  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <div className="container">
          <section className="text">
            <p>Seja bem vindo meu caro, esta area é restrita somente para adiministradores</p>
          </section>
          <section className="form">
            <form onSubmit={Logar}>
              <input onChange={e => setEmail(e.target.value)} type="text" name='email' placeholder='digite o seu email aqui' />
              <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='digite a sua senha aqui'/>
              <button type="submit"> entrar </button>
            </form>
          </section>
        </div>
      </Container>
    </ThemeProvider>
  )
}
