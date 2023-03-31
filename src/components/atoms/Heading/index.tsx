import React from "react";
import { StyledHeading } from "./index.styles";

interface StyledHeadingProps {
  children: React.ReactNode;
}

const Heading = (props: StyledHeadingProps) => {
  const { children } = props;
  return <StyledHeading variant="h3">{children}</StyledHeading>;
};

export default Heading;
