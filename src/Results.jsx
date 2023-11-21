// Importuj potrzebne komponenty i style
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { fakeRequest } from "./fakeRequest";

const fetchPlanes = async (formValues) => {
  // post
  // const response = await axios({
  //   // headers: { authorization: `Bearer ${token}` },
  //   method: "post",
  //   url: "url backeundu",
  //   data: {
  //     // to jest body requestu
  //     ...formValues,
  //   },
  // });
  // return response?.data;
  await fakeRequest();
  return [
    { id: 1, cena: 999, przewoznik: "abc" },
    { id: 2, cena: 1299, przewoznik: "xyz" },
    { id: 3, cena: 899, przewoznik: "def" },
    // Add more objects as needed
  ];
};
export const Results = () => {
  const formValues = useLocation();

  console.log("formValues", formValues);
  const { isLoading, data, isError, error } = useQuery({
    queryKey: "planes",
    queryFn: () => fetchPlanes(formValues),
  });
  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>Wyszukiwania</h2>
      {data?.map((plane) => (
        <div key={plane.id}>
          <Link to={`/results/${plane.id}`}>
            {plane.id} - {plane.cena} - {plane.przewoznik}
          </Link>
        </div>
      ))}
    </div>
  );
  // return (
  //   <div>
  //     <div className='mainframe'>
  //       <img className="img-m" src={logo4} alt="logo" style={{ width: 'auto', height: '70px' }} />
  //       <h2 style={{ marginLeft: '20px' }}>SkyHunt.</h2>
  //     </div>

  //     {/* zrobic z tego klase w css */}
  //     <div style={{ backgroundColor: 'rgba(255, 190, 50, 1)', height: '80px', width: '100%' }}>
  //       {/* Zawartość pomarańczowego prostokąta o wysokości 60 px */}
  //       <button onClick={refetch}> Wyświetl</button>
  //       {
  //         data?.data.map((plane) =>{
  //           return( <div key={plane.id}>
  //           {/* <Link to={`/rq-super-heroes/${plane.id}`}>{plane.id}</Link>  */}
  //           {plane.id}
  //           </div>)

  //       })
  //       }
  //     </div>
  //   </div>
  // )
};
