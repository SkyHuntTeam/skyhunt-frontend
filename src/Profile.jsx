// import { usePlaneData } from "./hooks/usePlaneData";
import { useQuery } from "react-query";

import { Header2 } from "./Header2";
import axios from "axios";
import loggedUser from "./LoggedUser.js";

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
  return axios.get(
      "http://localhost:8080/api/user",
      {
        'headers': {'Authorization': 'Bearer ' + loggedUser.token}
      }
  ).then(response => {
    const user = response.data;
    return {
      firstName: user.name,
      lastName: user.surname,
      age: 25,
      email: user.email,
      address: {
        city: "Cityville",
        zipCode: "54321",
      }
    }
  }).catch((reject) => {
    console.log(reject);
  });
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
