import React, { ReactElement } from 'react'
import { hot } from "react-hot-loader";
import Menu from './component/Menu';
import './css/index.css'

interface Props {
  
}

function App({}: Props): ReactElement {

  return (
    <>
    <header>
    <Menu/>
    </header>

    <main>
      <h1> Hello world</h1>
    </main>

    <footer>

    </footer>
      
    </>
  )
}


declare let module: Record<string, unknown>;

export default hot(module)(App);
