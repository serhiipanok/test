import { Layout, Menu, Button } from "antd";
import logoImage from "../assets/images/logo.svg";
import logoBottomImage from "../assets/images/logo-bottom.svg";

const LeftSideBar = () => (
  <Layout.Sider className="test__sidebar left" width={272}>
    <div className="logo_blc">
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
      <div className="user-info">
        <h4>Personal</h4>
        <p>projects.com</p>
      </div>
    </div>
    <Menu className="menu" theme="dark" defaultSelectedKeys={["1"]}>
      <Menu.Item className="menu-item" key="1">
        Home
      </Menu.Item>
      <Menu.Item className="menu-item" key="2">
        Learn
      </Menu.Item>
      <Menu.Item className="menu-item disabled" key="3" disabled={true}>
        Your Work
      </Menu.Item>
      <Menu.Item className="menu-item" key="4">
        Cloud Documents
      </Menu.Item>
      <Menu.Item className="menu-item" key="5">
        Plugins
      </Menu.Item>
      <Menu.Item className="menu-item" key="6">
        Deleted
      </Menu.Item>
    </Menu>
    <div className="action_blc">
      <Button className="button create">Create New</Button>
      <Button className="button open">Open</Button>
    </div>
    <div className="bottom-logo">
      <img src={logoBottomImage} alt="logo" />
    </div>
  </Layout.Sider>
);

export default LeftSideBar;
