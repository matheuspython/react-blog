import React, { FormEvent, useState } from 'react';
import { api } from '../../services/api';


import { Container } from './styles';

// type Post = {
//   id: string;
//   message:string;
//   title: string;
//   urlImg: string;
// }
export const PostarBlog: React.FC = () => {
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('')
  const [urlImg, setUrlImg] = useState('')

  
  async function sendPost(event: FormEvent){
    event.preventDefault()
    if(!message.trim()){
      return
    }
    await api.post('/sendPost', { message, title, urlImg })
    setMessage('')
    setTitle('')
    setUrlImg('')
  }
    
  return (
    <Container>
      <div className="container">
        <form onSubmit={sendPost}>
          <input onChange={e => setUrlImg(e.target.value)} name='urlImg' type="text" placeholder='digite o link da imagem aqui'/>
          <input onChange={e => setTitle(e.target.value)} type="text"name='title' placeholder='digite o titulo de seu post' />
          <textarea onChange={e => setMessage(e.target.value)} name="message" id="post" placeholder='digite a sua noticia aqui'></textarea>
          
          <button type="submit">Send post</button>
        </form>
      </div>
    </Container>
  )
}
