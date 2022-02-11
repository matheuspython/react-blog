import React, { useContext, useState } from 'react';
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'
import {shade} from 'polished'


interface Props {
  toggleTheme(): void
}

import { Container } from './styles';

export const Header: React.FC <Props> = ({toggleTheme}) => {
  const [menu, setMenu] = useState(false)
  const { colors, title } = useContext(ThemeContext);

  function changeMenuState(){
    setMenu(!menu)
  }

  return (
    <Container>
      <div className="container">
          <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />

        <nav>
          <img onClick={changeMenuState} src="https://www.pngrepo.com/png/312300/180/hamburger-menu.png" alt="" />
        </nav>
      </div>
      <aside style={{display: menu ? 'block' : 'none'}}>
        <img onClick={changeMenuState} src="https://www.pinclipart.com/picdir/big/538-5385185_grey-cross-icon-png-clipart.png" alt="sair" />
        <ul>
          <li><a href="">link 1</a></li>
          <li><a href="">link 2</a></li>
          <li><a href="">link 3</a></li>
        </ul>
      </aside>
    </Container>
  )
} 
