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
import Signin from './Pages/Website/Signin';
import Signup from './Pages/Website/Signup';
import ListCategory from './Pages/Admin/Category/ListCategory';
import Dashboard from './Components/Admin/Dashboard';
import Edit from './Pages/Admin/Products/Edit';
import AddCategory from './Pages/Admin/Category/AddCategory';
import EditCategory from './Pages/Admin/Category/EditCategory';
import Cart from './Pages/Website/Cart';
import Bill from './Pages/Website/Bill';
import Ntfcation from './Pages/Website/Ntfcation';
import Contact from './Pages/Website/Contact';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<WebsiteLayount />}>
            <Route index element={<HomePage/> }/>
            <Route path='products' element={<Products />}/>
            <Route path='news' element={<News/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='productdetail' element={<ProductDetail/>}/>
            <Route path='productdetail/cart' element={<Cart/>}/>
            <Route path='productdetail/cart/bill' element={<Bill/>}/>
            <Route path='productdetail/cart/bill/notification' element={<Ntfcation />}/>
        </Route>
        <Route path='admin' element={<AdminLayount />}>
          <Route index element={<Dashboard />} />

            <Route path='products' >
              <Route index element={<List />} /> 
              <Route path='add' element={<Add />}/>
              <Route path=':id/edit' element={<Edit />} />
            </Route>
           <Route path='category'>
              <Route index element={<ListCategory />} />
              <Route path='add' element={<AddCategory />}/>
              <Route path=':id/edit' element={<EditCategory/>} />
           </Route>
        </Route>
        <Route path='signin' element={<Signin/>} />
        <Route path='signup' element={<Signup/>} />
        
      </Routes>
      


    </div>
  )
}

export default App
