import React from 'react'
import { Layout, Typography, Avatar, Menu, Breadcrumb } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MailOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header } = Layout;
type Props = {}

const HeaderAdmin = (props: Props) => {
  return (
    <div>
      <Header style={{ padding: 15 }}>
        <Avatar style={{ float: 'right' }} src='./db.png' />
        <Title style={{ color: 'white' }} level={2}>Admin</Title>
      </Header>
    </div>
  )
}

export default HeaderAdmin