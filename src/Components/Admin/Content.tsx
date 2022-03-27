import { Layout } from 'antd';
import React from 'react'
const { Header, Footer, Sider, Content } = Layout;
import { Breadcrumb } from 'antd';
type Props = {}

const Contents = (props: Props) => {
  return (
    <div>          
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background " style={{background: '#fff',  padding: 24, minHeight: 500 }}>
                Content
              </div>
            </Content>
  </div>
  )
}

export default Contents