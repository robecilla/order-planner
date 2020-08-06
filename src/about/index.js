import { Typography } from "antd";
const { Paragraph, Text, Link } = Typography;

export const About = () => {
  return (
    <Typography style={{ textAlign: "center" }}>
      <Paragraph>Dearest chorbo,</Paragraph>
      <Paragraph>
        Welcome to the{" "}
        <Text style={{ fontStyle: "italic" }}>Order Planner App</Text> version{" "}
        <Text code>1.0.0</Text>!
      </Paragraph>
      <Paragraph>
        I took the freedom to start the foundation for the idea you had
        implemented in the Excel sheet, but in a web app version!
      </Paragraph>
      <Paragraph>
        What I want out of this is for us (especially you) to improve our
        programming skills together by building more features. There are some
        bugs and a lot of things to improve, so be ready! I hope this will help
        you learn new skills in the web development field. With the right amount
        of knowledge and creativity, you can build a lot of powerful things!
      </Paragraph>
      <Paragraph>
        So whenever you're ready, pull{" "}
        <Link href="https://github.com/robecilla/order-planner" target="_blank">
          this
        </Link>{" "}
        and{" "}
        <Link
          href="https://github.com/robecilla/order-planner-api"
          target="_blank"
        >
          this
        </Link>
        , and let's go!
      </Paragraph>
      <Paragraph>Sincerely yours, Rob.</Paragraph>
    </Typography>
  );
};
