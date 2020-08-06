import { route } from "preact-router";
import { Row, Col, Card, PageHeader, Button, Empty } from "antd";
import RecipeAPI from "../api/recipe";
import { useState, useEffect } from "preact/hooks";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => RecipeAPI.all().then((recipes) => setRecipes(recipes)), []);

  if (recipes.length === 0) {
    return (
      <Empty description="There are currently no recipes! How about creating one?">
        <Button type="primary" onClick={() => route("/recipe/create")}>
          Create recipe
        </Button>
      </Empty>
    );
  }

  return (
    <>
      <PageHeader
        backIcon={false}
        title="Recipes"
        extra={[
          <Button type="primary" onClick={() => route("/recipe/create")}>
            Create
          </Button>,
        ]}
      />
      <Row gutter={[16, 16]}>
        {recipes.map((recipe) => (
          <Col>
            <Card
              onClick={() => route(`/recipe/${recipe.id}`)}
              style={{ cursor: "pointer" }}
            >
              <Card.Meta title={recipe.name} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
