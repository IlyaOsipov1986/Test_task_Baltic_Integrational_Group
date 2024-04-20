import { List } from "antd";
import { InfoItem } from "./InfoItem";

export const Info = () => {
  return (
    <List>
      <InfoItem label={"Telephone"} data={"(254)954-1289"} />
      <InfoItem label={"Email"} data={"jhon_smith@exsearch.com"} />
      <InfoItem label={"Company"} data={"Keebler LLC"} />
      <InfoItem
        label={"Address"}
        data={"Wantang Road, Xihu District, Hangzhou, Zhejiang, China"}
      />
    </List>
  );
};
