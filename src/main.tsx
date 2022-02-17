import React from 'react'
import ReactDOM from 'react-dom'
import { Rotas } from './Rotas' 
import {BrowserRouter as Router} from 'react-router-dom'
import { Footer } from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Rotas />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
