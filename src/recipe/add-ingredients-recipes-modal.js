import { Modal } from "antd";
import { MeasureSetter } from "../components/measure-setter";
import { useState } from "preact/hooks";

export const AddIngredientsRecipeModal = ({
  isOpen,
  onAdd,
  onCancel,
  excludeIds,
}) => {
  const [measures, setMeasures] = useState([]);

  return (
    <Modal
      visible={isOpen}
      title="Add ingredients"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => onAdd(measures)}
    >
      <MeasureSetter onChange={setMeasures} excludeIds={excludeIds} />
    </Modal>
  );
};
