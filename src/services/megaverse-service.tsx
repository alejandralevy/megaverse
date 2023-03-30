interface mapResponse {
  goal: Array<Array<String>>;
}

export const getGoalMap = async () => {
  const response = await fetch(
    "https://challenge.crossmint.io/api/map/5b7ddb8a-1ad4-45db-a589-f8d198a70762/goal",
    {
      method: "GET",
    }
  );
  const data: mapResponse = await response.json();
  return data;
};
