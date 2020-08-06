import { useState, useEffect } from "preact/hooks";
import { List as AntDList, Checkbox } from "antd";

export const List = ({ items, onChange }) => {
  const [selecteditems, setSelecteditems] = useState([]);

  useEffect(() => onChange(selecteditems), [selecteditems]);

  function handleItems(checked, haystack, needle) {
    return checked
      ? [...haystack, needle]
      : haystack.filter((x) => x !== needle);
  }

  if (items.length === 0) return;

  return (
    <AntDList
      style={{ marginTop: "16px" }}
      bordered
      dataSource={items}
      renderItem={(item) => (
        <AntDList.Item>
          <Checkbox
            checked={selecteditems.includes(item.id)}
            onChange={(e) =>
              setSelecteditems(
                handleItems(e.target.checked, selecteditems, item.id)
              )
            }
          >
            {item.ingredient
              ? `${item.ingredient.name} ${item.quantity} ${item.unit}`
              : item.name}
          </Checkbox>
        </AntDList.Item>
      )}
    />
  );
};
