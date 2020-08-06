import { Row, Col, Layout, Menu } from "antd";
import Router from "preact-router";
import { Home } from "./home";
import Recipe from "./recipe";
import { CreateRecipe } from "./create-recipe";
import Ingredients from "./ingredients";
import Units from "./units";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <a href="/">Recipes</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/ingredients">Ingredients</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/units">Units</a>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>
      <Row style={{ marginTop: "24px" }}>
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 16, offset: 4 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 12, offset: 6 }}
          xl={{ span: 8, offset: 8 }}
        >
          <Router>
            <Home path="/" />
            <Recipe path="/recipe/:id" />
            <CreateRecipe path="/recipe/create" />
            <Ingredients path="/ingredients" />
            <Units path="/units" />
          </Router>
        </Col>
      </Row>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Order Planner ©2020 chorbo.rocks
    </Footer>
  </Layout>
);

export default App;
