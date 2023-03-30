import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { AstralObjectContainer } from "./styles";
import "../../icon-library";

export enum AstralObjectType {
  Soloon = "SOOLON",
  Cometh = "COMETH",
  Polyanet = "POLYANET",
}

export enum AstralObjectConfig {
  White = "WHITE",
  Blue = "BLUE",
  Purple = "PURPLE",
  Red = "RED",
  Down = "DOWN",
  Up = "UP",
  Right = "RIGHT",
  Left = "LEFT",
}
interface AstralObjectProps {
  type: AstralObjectType;
  config: AstralObjectConfig | null;
}

const AstralObject: FC<AstralObjectProps> = ({ type, config }) => {
  return (
    <AstralObjectContainer>
      <FontAwesomeIcon icon={["fas", "meteor"]} />
    </AstralObjectContainer>
  );
};

export default AstralObject;
