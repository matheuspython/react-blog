import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';
import Globals from '../global/styles'
import dark from '../global/themes/dark';
import light from '../global/themes/light';

export const SendBlogPost: React.FC = () => {
  const [theme, setTheme] = useState(dark)
  const toggleTheme = () => setTheme(theme.title === 'light'? dark : light)
  
  return (
    <ThemeProvider theme={theme}>
      <Globals />
      <Header toggleTheme={toggleTheme} />

    </ThemeProvider>

  )
}
