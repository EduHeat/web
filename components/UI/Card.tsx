import React from "react";
import { Card as NextCard } from "@nextui-org/react";

const Card = ({ children, ...props }) => {
  return <NextCard {...props}>{children}</NextCard>;
};

export default Card;
