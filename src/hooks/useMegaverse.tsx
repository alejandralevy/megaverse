import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGoalMap } from "../services/megaverse-service";

const useMegaverse = () => {
  const GOAL_MAP = ["goalMap"];

  const goalMap = useQuery(GOAL_MAP, () => getGoalMap());

  return {
    isLoading: goalMap.isLoading,
    error: goalMap.error,
    data: goalMap.data?.goal,
  };
};

export default useMegaverse;
