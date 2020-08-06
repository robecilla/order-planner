import { useState, useEffect } from "preact/hooks";

import { Input, Select } from "antd";
import IngredientAPI from "../api/ingredient";
import UnitAPI from "../api/unit";

export const MeasureSetter = ({ excludeIds = [], onChange }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const [units, setUnits] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    IngredientAPI.all().then((ingredients) => setIngredients(ingredients));
    UnitAPI.all().then((units) => setUnits(units));
  }, []);

  useEffect(() => onChange(selectedIngredients), [selectedIngredients]);

  return (
    <>
      <Select
        style={{ width: "100%" }}
        onSelect={(ingredientId) =>
          setSelectedIngredients([
            ...selectedIngredients,
            ingredients.filter(
              (ingredient) => ingredient.id === ingredientId
            )[0],
          ])
        }
        onDeselect={(ingredientId) =>
          setSelectedIngredients(
            selectedIngredients.filter((x) => x.id !== ingredientId)
          )
        }
        mode="multiple"
        placeholder="Select ingredients ..."
        options={ingredients
          .filter((ingredient) => !excludeIds.includes(ingredient.id))
          .map((ingredient) => ({
            value: ingredient.id,
            label: ingredient.name,
          }))}
      />
      {selectedIngredients.map((selectedIngredient) => (
        <Input.Group compact style={{ marginTop: "24px" }}>
          <Input
            name="selected_ingredient_name"
            style={{ width: "30%" }}
            disabled
            value={selectedIngredient.name}
          />
          <Input
            style={{ width: "45%" }}
            suffix="quantity"
            type="number"
            min={1}
            onChange={(x) => {
              const updated = [
                {
                  ...selectedIngredient,
                  ...{
                    quantity: Number(x.target.value),
                  },
                },
              ];

              setSelectedIngredients(
                selectedIngredients.map(
                  (x) => updated.find(({ id }) => id === x.id) || x
                )
              );
            }}
          />
          <Select
            placeholder="Units"
            style={{ width: "25%" }}
            onChange={(unitId) => {
              const updated = [
                {
                  ...selectedIngredient,
                  ...{
                    unitId,
                  },
                },
              ];

              setSelectedIngredients(
                selectedIngredients.map(
                  (x) => updated.find(({ id }) => id === x.id) || x
                )
              );
            }}
            options={units.map((unit) => ({
              value: unit.id,
              label: unit.name,
            }))}
          />
        </Input.Group>
      ))}
    </>
  );
};
