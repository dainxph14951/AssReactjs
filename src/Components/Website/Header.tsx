import React from 'react'
import  Nav  from './Nav'
import Search from './Search'

import { Layout } from 'antd';

const { Header } = Layout;
type Props = {}

const Headers = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav />
        
        </div>
    </div>
    </nav>
  )
}

export default Headers