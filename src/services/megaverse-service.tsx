import { parseAstralObject } from "../utils/astralObjectTypeConfig";

export type MegaverseMap = Array<Array<String>>;
export type MegaverseCurrentMap = Array<
  Array<{ type: number; config?: string; direction?: string }>
>;
interface goalMapResponse {
  goal: MegaverseMap;
}

interface myMapResponse {
  map: {
    id: string;
    content: MegaverseCurrentMap;
  };
}

const CANDIDATE_ID = "5b7ddb8a-1ad4-45db-a589-f8d198a70762";

export const getGoalMap = async () => {
  const response = await fetch(
    `https://challenge.crossmint.io/api/map/${CANDIDATE_ID}/goal`,
    {
      method: "GET",
    }
  );
  const data: goalMapResponse = await response.json();
  return data;
};

export const getMyMap = async () => {
  const response = await fetch(
    `https://challenge.crossmint.io/api/map/${CANDIDATE_ID}`,
    {
      method: "GET",
    }
  );
  const data: myMapResponse = await response.json();
  return data;
};

export const generateMap = async (goalMap: MegaverseMap) => {
  goalMap.forEach((row, rowIndex) => {
    row.forEach((astralObject, columnIndex) => {
      createAstralObject(astralObject, rowIndex, columnIndex);
    });
  });
};

const createAstralObject = (
  astralObject: String,
  row: number,
  column: number
) => {
  const { type, config } = parseAstralObject(astralObject);
  switch (type) {
    case "SOLOON":
      return createSoloon(row, column, config || "");
    case "POLYANET":
      return createPolyanet(row, column);
    case "COMETH":
      return createCometh(row, column, config || "");
    default:
      return;
  }
};

const createPolyanet = async (row: number, column: number) => {
  const body = JSON.stringify({ row, column, candidateId: CANDIDATE_ID });
  return fetch("https://challenge.crossmint.io/api/polyanets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};

const createSoloon = async (row: number, column: number, color: string) => {
  const body = JSON.stringify({
    row,
    column,
    color,
    candidateId: CANDIDATE_ID,
  });
  return fetch("https://challenge.crossmint.io/api/soloons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};

const createCometh = async (row: number, column: number, direction: string) => {
  const body = JSON.stringify({
    row,
    column,
    direction,
    candidateId: CANDIDATE_ID,
  });
  return fetch("https://challenge.crossmint.io/api/comeths", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};
