import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { AstralObjectContainer } from "./styles";
import "../../icon-library";
import { IconName, RotateProp } from "@fortawesome/fontawesome-svg-core";

export type AstralObjectTypes = "SOOLON" | "COMETH" | "POLYANET" | "SPACE";
export type AstralObjectConfigs =
  | "WHITE"
  | "BLUE"
  | "PURPLE"
  | "RED"
  | "DOWN"
  | "UP"
  | "RIGHT"
  | "LEFT"
  | null;
export interface AstralObjectProps {
  type: AstralObjectTypes;
  config: AstralObjectConfigs;
}

const AstralObject: FC<AstralObjectProps> = ({ type, config }) => {
  const parseAstralObjectToIcon = () => {
    switch (type) {
      case "SOOLON":
        return "circle" as IconName;
      case "SPACE":
        return "star" as IconName;
      case "POLYANET":
        return "globe" as IconName;
      case "COMETH":
        return "meteor" as IconName;
      default:
        return "circle" as IconName;
    }
  };

  const getIconRotation = () => {
    switch (config) {
      case "UP":
        return 90 as RotateProp;
      case "DOWN":
        return 0 as RotateProp;
      case "LEFT":
        return 180 as RotateProp;
      case "RIGHT":
        return 270 as RotateProp;
      default:
        return 0 as RotateProp;
    }
  };

  const getIconColor = () => {
    if (type === "POLYANET") return "#f0ec75";
    if (type === "SPACE") return "#2c2183";
    if (type === "COMETH") return "#dd6840";
    switch (config) {
      case "WHITE":
        return "#fff";
      case "RED":
        return "#e63737";
      case "BLUE":
        return "#5a69dd";
      case "PURPLE":
        return "#955add";
      default:
        return "#fff";
    }
  };

  return (
    <AstralObjectContainer>
      <FontAwesomeIcon
        icon={["fas", parseAstralObjectToIcon()]}
        rotation={getIconRotation()}
        style={{ color: getIconColor() }}
      />
    </AstralObjectContainer>
  );
};

export default AstralObject;