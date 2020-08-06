import { message, PageHeader, Popconfirm, Button, Space } from "antd";
import RecipeAPI from "../api/recipe";
import { route } from "preact-router";
import { AddIngredientsRecipeModal } from "./add-ingredients-recipes-modal";
import { useEffect, useState } from "preact/hooks";
import { List } from "../components/list";

const Recipe = ({ id }) => {
  const [recipe, setRecipe] = useState();
  const [measureIds, setMeasureIds] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => RecipeAPI.get(id).then((recipe) => setRecipe(recipe)), []);

  if (!recipe) return null;

  return (
    <>
      <PageHeader
        title={recipe.name}
        extra={[
          <Button
            danger
            onClick={() =>
              RecipeAPI.delete(id).then(() => {
                message.success("Recipe deleted successfully!");
                route("/recipes");
              })
            }
          >
            Delete
          </Button>,
        ]}
      />
      <Space>
        <Button onClick={() => setShowModal(true)}>Add ingredients</Button>
        {measureIds.length > 0 && (
          <Popconfirm
            placement="rightBottom"
            title="Are you sure delete this ingredient?"
            onConfirm={() =>
              RecipeAPI.deleteMeasures(id, measureIds).then(() => {
                message.success(
                  `Ingredient${
                    measureIds.lenght > 1 ? "s" : ""
                  } deleted successfully!`
                );
                RecipeAPI.get(id).then((recipe) => setRecipe(recipe));
                setMeasureIds([]);
              })
            }
            okText="Delete"
            okType="danger"
            cancelText="Cancel"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        )}
      </Space>
      <List items={recipe.measures} onChange={setMeasureIds} />
      <AddIngredientsRecipeModal
        isOpen={showModal}
        onAdd={(measures) =>
          RecipeAPI.addMeasures(id, measures).then((recipe) => {
            setRecipe(recipe);
            message.success(
              `Ingredient${measures.lenght > 1 ? "s" : ""} added successfully!`
            );
            setShowModal(false);
            setMeasureIds([]);
          })
        }
        onCancel={() => setShowModal(false)}
        excludeIds={recipe.measures.map((x) => x.ingredient.id)}
      />
    </>
  );
};

export default Recipe;
