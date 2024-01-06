// import { usePlaneData } from "./hooks/usePlaneData";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { BookPlane } from "./BookPlane";
const exampleData = {
  id: 1,
  model: "Example Model",
};

const fetchPlane = async () => {
  return exampleData;
};

export const Plane = () => {
  const { planeId } = useParams();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: "planes/" + planeId,
    queryFn: () => fetchPlane(),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <p>plane id: {planeId}</p>
      <p> id: {data.id}</p>
      <p> model: {data.model}</p>
      <BookPlane planeId={planeId} />
    </div>
  );
};
