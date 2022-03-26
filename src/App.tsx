import { useState } from 'react'
import './App.css'
import {  Dropdown, DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import Headers from './Components/Website/Header';

import Footer from './Components/Website/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <header className="">
        <Headers />
        </header>
      
        <main>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
  )
}

export default App
