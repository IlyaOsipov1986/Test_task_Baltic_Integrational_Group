import { Button } from "antd";
import { useState } from "react";
import {DeleteOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import { reqContacts } from "../scripts/reqContacts";

export const GetContacts = (props) => {

    const {
        setContactCards
    } = props

  const [contacts, setContacts] = useState(10);

    function onHandleClearContacts() {
        setContactCards([]);
        setContacts(10);
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
      }}
    >
      <Button onClick={() => reqContacts(contacts).then((res) => setContactCards(res.results ? res.results : []))}>Get {contacts} contacts</Button>
      <Button onClick={() => setContacts(contacts === 100 ? 100 : contacts + 10)} size="small" icon={<PlusOutlined />} />
      <Button onClick={() => setContacts(contacts === 10 ? 10 : contacts - 10)} size="small" icon={<MinusOutlined />} />
      <Button onClick={onHandleClearContacts} size="small" icon={<DeleteOutlined /> } />
    </div>
  );
};
