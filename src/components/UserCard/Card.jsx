import { Card as AntdCard } from "antd";
import { Avatar } from "./Avatar";
import { Info } from "./Info";
const { Meta } = AntdCard;

export const Card = () => {
  return (
    <AntdCard style={{ maxWidth: "480px" }}>
      <Meta
        avatar={<Avatar name={"Ervin Howell"} />}
        title={"Ervin Howell"}
        description={<Info />}
      />
    </AntdCard>
  );
};
