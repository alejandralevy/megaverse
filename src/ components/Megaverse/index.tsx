import { FC } from "react";
import usePollyverse from "../../hooks/useMegaverse";
import AstralObject, { AstralObjectType } from "../AstralObject";
import { MegaverseMap, MegaverseRow, MapContainer } from "./styles";

const Megaverse: FC = () => {
  const { data, isLoading } = usePollyverse();

  const renderPolyverseMap = () => {
    console.log(data);
    return data?.map((mapRow) => {
      return (
        <MegaverseRow>
          {mapRow.map((astralObject) => {
            return (
              <AstralObject type={AstralObjectType.Polyanet} config={null} />
            );
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
