import { message, PageHeader, Popconfirm, Button, Space } from "antd";
import { useEffect, useState } from "preact/hooks";
import { List } from "../components/list";
import { AddUnitModal } from "./add-unit-modal";
import UnitAPI from "../api/unit";

const Units = () => {
  const [units, setUnits] = useState([]);
  const [unitIds, setUnitIds] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => UnitAPI.all().then((units) => setUnits(units)), []);

  return (
    <>
      <PageHeader
        title="Units"
        extra={[
          <Button type="primary" onClick={() => setShowModal(true)}>
            Create
          </Button>,
        ]}
      />
      <Space>
        {unitIds.length > 0 && (
          <Popconfirm
            placement="rightBottom"
            title="Are you sure delete this unit?"
            onConfirm={() =>
              UnitAPI.delete(unitIds).then(() => {
                message.success(`Unit deleted successfully!`);
                UnitAPI.all().then((units) => setUnits(units));
                setUnitIds([]);
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
      <List items={units} onChange={setUnitIds} />
      <AddUnitModal
        isOpen={showModal}
        onAdd={(Unit) =>
          UnitAPI.create(Unit).then(() => {
            message.success(`Unit added successfully!`);
            UnitAPI.all().then((units) => setUnits(units));
            setShowModal(false);
            setUnitIds([]);
          })
        }
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};

export default Units;
