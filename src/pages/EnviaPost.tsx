import React, { useState } from 'react'
import { Header } from '../components/Header'
import Globals from '../global/styles'
import { ThemeProvider } from 'styled-components';

import dark from '../global/themes/dark'
import light from '../global/themes/light'
import { Footer } from '../components/Footer';
import { PostarBlog } from '../components/PostarBlog';


export const EnviaPost:React.FC = ()=> {
  const [theme, setTheme] = useState(dark)
  const toggleTheme = () => setTheme(theme.title === 'light'? dark : light)
  
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Header toggleTheme={toggleTheme} />
      <PostarBlog />
      <Footer/>
    </ThemeProvider>
  )
}

