import { message, PageHeader, Popconfirm, Button, Space } from "antd";
import { useEffect, useState } from "preact/hooks";
import { List } from "../components/list";
import { AddIngredientModal } from "./add-ingredient-modal";
import IngredientAPI from "../api/ingredient";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [measureIds, setMeasureIds] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(
    () =>
      IngredientAPI.all().then((ingredients) => setIngredients(ingredients)),
    []
  );

  return (
    <>
      <PageHeader
        title="Ingredients"
        extra={[
          <Button type="primary" onClick={() => setShowModal(true)}>
            Create
          </Button>,
        ]}
      />
      <Space>
        {measureIds.length > 0 && (
          <Popconfirm
            placement="rightBottom"
            title="Are you sure delete this ingredient?"
            onConfirm={() =>
              IngredientAPI.delete(measureIds).then(() => {
                message.success(`Ingredient deleted successfully!`);
                IngredientAPI.all().then((ingredients) =>
                  setIngredients(ingredients)
                );
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
      <List items={ingredients} onChange={setMeasureIds} />
      <AddIngredientModal
        isOpen={showModal}
        onAdd={(ingredient) =>
          IngredientAPI.create(ingredient).then(() => {
            message.success(`Ingredient added successfully!`);
            IngredientAPI.all().then((ingredients) =>
              setIngredients(ingredients)
            );
            setShowModal(false);
            setMeasureIds([]);
          })
        }
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};

export default Ingredients;
