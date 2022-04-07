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
import {create, list, remove, update} from '../src/api/products'
import Signin from './Pages/Website/Signin';
import Signup from './Pages/Website/Signup';
import ListCategory from './Pages/Admin/Category/ListCategory';
import Dashboard from './Components/Admin/Dashboard';
import Edit from './Pages/Admin/Products/Edit';
import AddCategory from './Pages/Admin/Category/AddCategory';
import EditCategory from './Pages/Admin/Category/EditCategory';
import {CategoryType} from './types/category'
import {listCate, add, removeCate} from '../src/api/category';
import { data } from './data';
import Cart from './Pages/Website/Cart';
import Bill from './Pages/Website/Bill';
import Ntfcation from './Pages/Website/Ntfcation';
import Contact from './Pages/Website/Contact';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])
  
  const removeItem = (id: number) => {
    // console.log('app.js', id);
    confirm('bạn có muốn xóa không ?');
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  }
  const onHanlderAdd = (data: any) => {
    create(data);
     setProducts([...products, data])
     alert('Đăng ký Thành công')
  }
  const onHandleUpdate = async (product : ProductType) => {
    console.log(product);
        const {data} = await update(product);
        //reRender
        setProducts(products.map(item => item._id === data.id ? data: item));
  }
  // Category
  useEffect(() => {
    const getCategory = async () => {
      const {data} = await listCate();
      setCategorys(data);
    }
    getCategory();
  },[])
  // delete category
  const removeItemCate = (id: any) => {
      confirm('Bạn có muốn xóa không ?')
      removeCate(id)
      setCategorys(categorys.filter(item => item._id !== id));
  }
  const onHanlderAddCate = (data: any) => {
    add(data);
    setCategorys([...categorys, data])
  }
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
              <Route index element={<List  products={products} onAdd={removeItem}/>} /> 
              <Route path='add' element={<Add  onAdd={onHanlderAdd}  />}/>
              <Route path=':id/edit' element={<Edit onUpdate={onHandleUpdate}/>} />
            </Route>
           <Route path='category'>
              <Route index element={<ListCategory categorys={categorys} onDeleteCate={removeItemCate}/>} />
              <Route path='add' element={<AddCategory onAdd={onHanlderAddCate}/>}/>
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
