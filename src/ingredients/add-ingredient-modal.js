import { Modal, Form, Input } from "antd";

export const AddIngredientModal = ({ isOpen, onAdd, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={isOpen}
      title="Add ingredient"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then(onAdd);
      }}
    >
      <Form form={form} layout="vertical" preserve={false}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please provide a name for the ingredient.",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
