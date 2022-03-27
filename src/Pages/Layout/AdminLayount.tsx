import React from 'react'
import { Layout, Typography } from 'antd';

import HeaderAdmin from '../../Components/Admin/HeaderAdmin';
import Slider from '../../Components/Admin/Slider';
import Contents from '../../Components/Admin/Content';
import FooterAdmin from '../../Components/Admin/FooterAdmin';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
type Props = {}

const AdminLayount = (props: Props) => {
  
  return (
    <div>
          <Layout>
        <HeaderAdmin />
        <Layout>
          <Slider />
          <Layout>
            <Contents />
            <FooterAdmin />
          </Layout>
          <main>
            <Outlet/>
          </main>
        </Layout>
      </Layout>
    </div>
  )
}

export default AdminLayount