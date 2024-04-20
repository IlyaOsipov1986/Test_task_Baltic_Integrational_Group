import { Layout } from "antd";
import { Card } from "./UserCard/Card";
const { Content } = Layout;
import { GetContacts } from "./GetContacts";
import {Fragment, useState} from "react";

export const Contacts = () => {

    const [contactCards, setContactCards] = useState([]);

  return (
    <Layout style={{ minHeight: "100dvh", padding: "32px" }}>
      <Content
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <GetContacts
            setContactCards={setContactCards}
        />
          {contactCards.length > 0 &&
              contactCards.map((contact, i) => {
                  return (
                      <Fragment key={contact.id.value ? contact.id.value : i}>
                          <Card
                              {...contact}
                          />
                      </Fragment>
                  )
              })
          }
      </Content>
    </Layout>
  );
};
