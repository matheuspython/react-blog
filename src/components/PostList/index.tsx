import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { api } from '../../services/api';
import { Post } from '../Post';

import { Container } from './styles';
 
type Post = {
  id: string;
  message:string;
  title: string;
  urlImg: string;
}

const postsQueue: Post[] = []

const socket = io('http://localhost:4000/')
socket.on('new_message', (newMessage: Post) => {
  postsQueue.push(newMessage);
})

export const PostList: React.FC = () => {
  const [post, setPost] = useState<Post[]>([]);
  useEffect(()=>{
    setInterval(() => {
      if (postsQueue.length > 0) {
        setPost(postsQueue)
      }
    }, 3000)
  }, [])

  useEffect(()=>{
    api.get<Post[]>('/getPost').then(response =>{
      console.log(response.data)
      setPost(response.data)
    })

  },[])

  return (
    <Container>
      <div className="container">
        <ul>
          {post.map(post => (
             <Post 
             image={post.urlImg}
             text={post.message}
             title={post.title}
           />
          ))}
        </ul>
      </div>  
    </Container>
  )
}

