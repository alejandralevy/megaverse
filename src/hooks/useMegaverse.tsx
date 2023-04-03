import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  generateMap,
  getGoalMap,
  getMyMap,
} from "../services/megaverse-service";

const useMegaverse = () => {
  const queryClient = useQueryClient();
  const GOAL_MAP = ["goalMap"];
  const MY_MAP = ["myMap"];

  const goalMap = useQuery(GOAL_MAP, () => getGoalMap());
  const myMap = useQuery(MY_MAP, () => getMyMap());

  const generateMapMutation = useMutation(generateMap, {
    onSuccess: () => {
      queryClient.fetchQuery(MY_MAP);
    },
  });

  const generateMapAction = () => {
    return new Promise((resolve, reject) => {
      goalMap.data?.goal &&
        generateMapMutation.mutate(goalMap.data?.goal, {
          onError: reject,
          onSuccess: resolve,
        });
    });
  };

  return {
    isLoading: goalMap.isLoading,
    error: goalMap.error,
    goalMap: goalMap.data?.goal,
    currentMap: myMap.data?.map?.content,
    generateMap: generateMapAction,
  };
};

export default useMegaverse;
