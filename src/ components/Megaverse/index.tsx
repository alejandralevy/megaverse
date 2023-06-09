import { FC } from "react";
import usePollyverse from "../../hooks/useMegaverse";
import { FontAwesomeIcon } from "../../icon-library";
import { parseAstralObjectType } from "../../utils/astralObjectTypeConfig";
import AstralObject from "../AstralObject";
import {
  MegaverseMap,
  MegaverseRow,
  MapContainer,
  ActionButton,
} from "./styles";

const Megaverse: FC = () => {
  const { currentMap, isLoading, generateMap, isGeneratingMap } =
    usePollyverse();

  const renderPolyverseMap = () => {
    return currentMap?.map((mapRow) => {
      return (
        <MegaverseRow>
          {mapRow.map((astralObject) => {
            const { type, config } = parseAstralObjectType(astralObject);
            return <AstralObject type={type} config={config} />;
          })}
        </MegaverseRow>
      );
    });
  };

  return (
    <MapContainer>
      <MegaverseMap>
        {isLoading ? (
          <div>
            <FontAwesomeIcon
              icon={["fas", "spinner"]}
              spin
              style={{ color: "53c23d" }}
            />
            <p>Loading...</p>
          </div>
        ) : (
          renderPolyverseMap()
        )}
      </MegaverseMap>
      <ActionButton onClick={generateMap}>
        {isGeneratingMap ? "Generating Megaverse" : "Create Megaverse!"}
      </ActionButton>
    </MapContainer>
  );
};

export default Megaverse;
