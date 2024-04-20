import { Button } from "antd";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { reqContacts } from "../scripts/reqContacts";

export const GetContacts = () => {
  const [contacts, setContacts] = useState(10);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
      }}
    >
      <Button onClick={() => reqContacts(contacts)}>Get 10 contacts</Button>
      <Button size="small" icon={<PlusOutlined />} />
      <Button size="small" icon={<MinusOutlined />} />
    </div>
  );
};
