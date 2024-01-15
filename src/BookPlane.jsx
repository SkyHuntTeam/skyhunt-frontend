// import { usePlaneData } from "./hooks/usePlaneData";

import { useMutation } from "react-query";
const sendBackendRequest = async (planeId) => {
  await new Promise((res) =>
    setTimeout(() => {
      res(1);
    }, 1000)
  );
  return `plane ${planeId} booked`;
};

export const BookPlane = (planeId) => {
  const { isLoading, error, mutate } = useMutation(
    (planeId) => sendBackendRequest(planeId),
    {
      onSuccess: () => {
        console.log({ message: "plane booked success" });
        alert("plane booked success");
        // onSuccess?.();
      },
      onError: () => {
        console.log({ message: "Error - plane not  booked" });
        // onError?.();
      },
    }
  );

  const handleOnButtonClick = () => {
    mutate(planeId);
  };
  return (
    <div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>{error}</p>}
      <button
        onClick={handleOnButtonClick}
        style={{ width: "80%", margin: " 20px, 0, 0, 10 px" }}
      >
        Zarezerwuj
      </button>
    </div>
  );
};
