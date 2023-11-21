import { usePlaneData } from "./hooks/usePlaneData";
import { useParams } from "react-router-dom";

export const Plane = () => {
  const { planeId } = useParams();
  const { isLoading, data, isError, error } = usePlaneData(planeId);
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data.id} -- {data.model}
    </div>
  );
};
