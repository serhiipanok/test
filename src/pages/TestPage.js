import { Layout } from "antd";
import LeftSideBar from "../components/LeftSideBar";
import Content from "../components/Content";
import RightSideBar from "../components/RightSideBar";

const TestPage = () => (
  <Layout className="test__layout">
    <LeftSideBar />
    <Content />
    <RightSideBar />
  </Layout>
);

export default TestPage;
