import { useState } from "preact/hooks";
import { message, Button, PageHeader, Form, Input } from "antd";
import { route } from "preact-router";
import RecipeAPI from "../api/recipe";
import { MeasureSetter } from "../components/measure-setter";

export const CreateRecipe = () => {
  const [form] = Form.useForm();
  const [measures, setMeasures] = useState([]);

  function onCreateRecipe(values) {
    const payload = {
      name: values.name,
      ingredients: measures.map((x) => ({
        ingredient_id: x.id,
        quantity: x.quantity,
        unit_id: x.unitId,
      })),
    };

    RecipeAPI.create(payload).then(() => {
      message.success("Recipe created successfully!");
      route("/");
    });
  }

  return (
    <>
      <PageHeader title="Create recipe" backIcon="<" />
      <Form layout="vertical" form={form} onFinish={onCreateRecipe}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please provide a name for the recipe.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ingredients"
          rules={[
            {
              required: true,
              message: "Please select some ingredients.",
            },
          ]}
        >
          <MeasureSetter onChange={setMeasures} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
