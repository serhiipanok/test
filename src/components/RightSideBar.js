import { Layout } from "antd";
import Avatar from "../assets/images/avatar.svg"

const RightSideBar = () => (
  <Layout.Sider className="test__sidebar right" width={70}>
    <img src={Avatar} alt="avatar" />
  </Layout.Sider>
);

export default RightSideBar;
