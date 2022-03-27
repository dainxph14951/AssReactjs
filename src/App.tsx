import { useState } from 'react'
import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayount from './Pages/Layout/AdminLayount';
import List from './Pages/Admin/Products/List';
import WebsiteLayount from './Pages/Layout/WebsiteLayount';
import HomePage from './Pages/Website/HomePage';
import News from './Pages/Website/News';
import Products from './Pages/Website/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<WebsiteLayount />}>
            <Route index element={<HomePage/> }/>
            <Route path='products' element={<Products />}/>
            <Route path='news' element={<News/>}/>
        </Route>
        <Route path='admin' element={<AdminLayount />}>
          <Route index element={<Navigate to='dashboard' />} />
          <Route path="dashboard" element={<h1></h1>} />
            <Route path='product' >
              <Route index element={<List />} />
            </Route>
        </Route>
      </Routes>
      


    </div>
  )
}

export default App
