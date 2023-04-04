import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  generateMap,
  getGoalMap,
  getMyMap,
} from "../services/megaverse-service";

const useMegaverse = () => {
  const queryClient = useQueryClient();
  const GOAL_MAP = ["goalMap"];
  const CURRENT_MAP = ["currentMap"];

  const goalMap = useQuery(GOAL_MAP, () => getGoalMap());
  const currentMap = useQuery(CURRENT_MAP, () => getMyMap());

  const generateMapMutation = useMutation(generateMap, {
    onSuccess: () => {
      console.log("TERMINE EL MAPA");
      debugger;
      queryClient.fetchQuery(CURRENT_MAP);
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
    isLoading: currentMap.isLoading,
    error: goalMap.error,
    goalMap: goalMap.data?.goal,
    currentMap: currentMap.data?.map?.content,
    generateMap: generateMapAction,
    isGeneratingMap: generateMapMutation.isLoading,
  };
};

export default useMegaverse;
