import { Card as AntdCard } from "antd";
import { Avatar } from "./Avatar";
import { Info } from "./Info";
const { Meta } = AntdCard;

export const Card = ({...contact}) => {

  return (
    <AntdCard style={{ maxWidth: "480px" }}>
      <Meta
        avatar={<Avatar name={contact.name.first} />}
        title={contact.name.first + " " + contact.name.last}
        description={<Info
            {...contact}
        />}
      />
    </AntdCard>
  );
};
