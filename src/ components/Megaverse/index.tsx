import { FC } from "react";
import usePollyverse from "../../hooks/useMegaverse";
import AstralObject, {
  AstralObjectConfigs,
  AstralObjectTypes,
} from "../AstralObject";
import { MegaverseMap, MegaverseRow, MapContainer } from "./styles";

const Megaverse: FC = () => {
  const { data, isLoading } = usePollyverse();

  const parseAstralObject = (astralObject: String) => {
    const typeAndConfig = astralObject.split("_");
    return {
      type:
        typeAndConfig[1] === "COMETH"
          ? typeAndConfig[1]
          : (typeAndConfig[0] as AstralObjectTypes),
      config: (typeAndConfig[1] === "COMETH"
        ? typeAndConfig[0]
        : typeAndConfig[1]) as AstralObjectConfigs,
    };
  };

  const renderPolyverseMap = () => {
    return data?.map((mapRow) => {
      return (
        <MegaverseRow>
          {mapRow.map((astralObject) => {
            const { type, config } = parseAstralObject(astralObject);
            return <AstralObject type={type} config={config} />;
          })}
        </MegaverseRow>
      );
    });
  };

  return (
    <MapContainer>
      <MegaverseMap>
        {isLoading ? <div>Loading...</div> : renderPolyverseMap()}
      </MegaverseMap>
    </MapContainer>
  );
};

export default Megaverse;
