// import { usePlaneData } from "./hooks/usePlaneData";
import { useQuery } from "react-query";

import { Header2 } from "./Header2";

const exampleData = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  email: "alice.smith@example.com",
  address: {
    city: "Cityville",
    zipCode: "54321",
  },
};

const fetchProfile = async () => {
  await new Promise((res) =>
    setTimeout(() => {
      res(1);
    }, 1000)
  );
  return exampleData;
};

export const Profile = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: "Profile",
    queryFn: () => fetchProfile(),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <Header2 />
      <div className="planeframe">
        {isLoading && <p>Loading...</p>}
        <p className="pp">Imie: {data.firstName}</p>
        <p className="pp">Nazwisko: {data.lastName}</p>
        <p className="pp">Mail: {data.email}</p>
      </div>
    </div>
  );
};
