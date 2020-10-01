import { Component } from "preact";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import AuthAPI from "../api/auth";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showAlert: false,
    };
  }
  onFinish = (values) => {
    console.log("Success:", values);
    AuthAPI.login(values)
      .then((response) => console.log(response))
      .catch((error) => {
        this.setState({
          showAlert: true,
        });
        throw error;
      });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render(props, state) {
    return (
      <>
        {state.showAlert && (
          <Alert
            message="Invalid username or password"
            description="Invalid username or password. Please put the right details."
            type="error"
            closable
            onClose={() => {
              this.setState({
                showAlert: false,
              });
            }}
          />
        )}

        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default Login;
