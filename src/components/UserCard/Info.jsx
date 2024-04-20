import { List } from "antd";
import { InfoItem } from "./InfoItem";

export const Info = ({...contact}) => {

  return (
    <List>
      <InfoItem label={"Telephone"} data={contact.phone} />
      <InfoItem label={"Email"} data={contact.email} />
      <InfoItem label={"Country"} data={contact.location.country} />
      <InfoItem
        label={"City"}
        data={contact.location.city}
      />
    </List>
  );
};
