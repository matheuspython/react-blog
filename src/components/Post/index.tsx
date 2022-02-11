import React from 'react';

import { Container } from './styles';

interface PostProps{
  text: string 
  image: string 
  title: string
}

export const Post: React.FC<PostProps> = ({ image, text, title }) => {
  return (
    <Container>
      <h1>{title}</h1>

      <section className='img'>
        <img src={image} alt={`noticia sobre ${title}`} />
      </section>

      <section className='noticia'>
       <p>{text}</p>
      </section>
        
      <a href='#'>link para o post</a>
    </Container>
  )
}
