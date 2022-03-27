import { Layout, Menu } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import SubMenu from 'antd/lib/menu/SubMenu';

import { MailOutlined } from '@ant-design/icons';
type Props = {}

const Slider = (props: Props) => {
  return (
    <div>
                <Sider style={{ background: '#001529' }}>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
           
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu key="AboutUS" icon={<MailOutlined />} title="About US">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
    </div>
  )
}

export default Slider