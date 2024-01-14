// import { usePlaneData } from "./hooks/usePlaneData";
import { useQuery } from "react-query";

const exampleData = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
  email: "alice.smith@example.com",
  address: {
    city: "Cityville",
    zipCode: "54321",
  },
  interests: ["photography", "travel"],
  workExperience: [
    {
      position: "Web Developer",
      company: "Tech Co",
      startDate: "2020-01-15",
    },
  ],
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
      {isLoading && <p>Loading...</p>}
      <p>firstName: {data.firstName}</p>
      <p>lastName: {data.lastName}</p>
    </div>
  );
};
