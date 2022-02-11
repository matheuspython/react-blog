import React from 'react';

import { Container } from './styles';

export const NewsCadastro: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <h2>Deseja receber noticias sobre o mundo da técnologia</h2>
        <form action="">
          <input className='formInput' type="text" placeholder='digite o seu melhor email aqui'/>
          <button className='formInput' type="submit">Receber emails</button>
        </form>
      </div>
    </Container>
  )
}
