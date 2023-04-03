import {
  AstralObjectConfigs,
  AstralObjectTypes,
} from "../ components/AstralObject";

export const parseAstralObject = (astralObject: String) => {
  if (!astralObject)
    return { type: "SPACE" as AstralObjectTypes, config: null };
  const typeAndConfig = astralObject.split("_");
  return {
    type:
      typeAndConfig[1] === "COMETH" || typeAndConfig[1] == "SOLOON"
        ? typeAndConfig[1]
        : (typeAndConfig[0] as AstralObjectTypes),
    config: (typeAndConfig[1] === "COMETH" || typeAndConfig[1] == "SOLOON"
      ? typeAndConfig[0]
      : typeAndConfig[1]) as AstralObjectConfigs,
  };
};

export const parseAstralObjectType = (
  astralObject: { type: number; color?: string; direction?: string } | null
) => {
  if (!astralObject)
    return {
      type: "SPACE" as AstralObjectTypes,
      config: null as AstralObjectConfigs,
    };
  switch (astralObject.type) {
    case 0:
      return {
        type: "POLYANET" as AstralObjectTypes,
        config: null as AstralObjectConfigs,
      };
    case 1:
      return {
        type: "SOLOON" as AstralObjectTypes,
        config: astralObject.color as AstralObjectConfigs,
      };
    case 2:
      return {
        type: "COMETH" as AstralObjectTypes,
        config: astralObject.direction as AstralObjectConfigs,
      };
    default:
      return {
        type: "SPACE" as AstralObjectTypes,
        config: null as AstralObjectConfigs,
      };
  }
};
