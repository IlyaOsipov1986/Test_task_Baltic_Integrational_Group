import { Layout } from "antd";
import { Card } from "./UserCard/Card";
const { Content } = Layout;
import { GetContacts } from "./GetContacts";

export const Contacts = () => {



  return (
    <Layout style={{ minHeight: "100dvh", padding: "32px" }}>
      <Content
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <GetContacts />
        <Card />
      </Content>
    </Layout>
  );
};
