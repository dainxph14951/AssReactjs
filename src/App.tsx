import { useEffect, useState } from 'react'
import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayount from './Pages/Layout/AdminLayount';
import List from './Pages/Admin/Products/List';
import WebsiteLayount from './Pages/Layout/WebsiteLayount';
import HomePage from './Pages/Website/HomePage';
import News from './Pages/Website/News';
import Products from './Pages/Website/Products';
import ProductDetail from './Pages/Website/ProductDetail';
import Add from './Pages/Admin/Products/Add';
import { ProductType } from './types/products';
import {list} from '../src/api/products'
import Signin from './Pages/Website/Signin';
import Signup from './Pages/Website/Signup';


function App() {
  const [count, setCount] = useState(0)
  const [product, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      console.log(data);
    }
    getProducts();
  },[])
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<WebsiteLayount />}>
            <Route index element={<HomePage/> }/>
            <Route path='products' element={<Products />}/>
            <Route path='news' element={<News/>}/>
            <Route path='productdetail' element={<ProductDetail/>}/>
        </Route>
        <Route path='admin' element={<AdminLayount />}>
          <Route index element={<Navigate to='dashboard' />} />
          <Route path="dashboard" element={<h1></h1>} />
            <Route path='products' >
              <Route index element={<List />} />
              <Route path='add' element={<Add/>}/>
            </Route>
        </Route>
        <Route path='signin' element={<Signin/>} />
        <Route path='signup' element={<Signup/>} />
        
      </Routes>
      


    </div>
  )
}

export default App
