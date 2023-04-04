import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { AstralObjectContainer } from "./styles";
import "../../icon-library";
import { IconName, RotateProp } from "@fortawesome/fontawesome-svg-core";

export type AstralObjectTypes = "SOLOON" | "COMETH" | "POLYANET" | "SPACE";
export type AstralObjectConfigs =
  | "white"
  | "blue"
  | "purple"
  | "red"
  | "down"
  | "up"
  | "right"
  | "left"
  | null;
export interface AstralObjectProps {
  type: AstralObjectTypes;
  config: AstralObjectConfigs;
}

const AstralObject: FC<AstralObjectProps> = ({ type, config }) => {
  const getIconName = () => {
    switch (type) {
      case "SOLOON":
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
      case "up":
        return 90 as RotateProp;
      case "down":
        return 0 as RotateProp;
      case "left":
        return 180 as RotateProp;
      case "right":
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
      case "white":
        return "#dcd9df";
      case "red":
        return "#e63737";
      case "blue":
        return "#5a69dd";
      case "purple":
        return "#955add";
      default:
        return "#dcd9df";
    }
  };

  return (
    <AstralObjectContainer>
      <FontAwesomeIcon
        icon={["fas", getIconName()]}
        rotation={getIconRotation()}
        style={{ color: getIconColor() }}
      />
    </AstralObjectContainer>
  );
};

export default AstralObject;