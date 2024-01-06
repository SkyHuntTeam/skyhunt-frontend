// Importuj potrzebne komponenty i style
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { fakeRequest } from "./fakeRequest";
import { NavLink } from "react-router-dom";
import { Header } from "./Header";

const exampleData = [
  {
    token: "abc123",
    priceBreakdown: {
      total: {
        currency: "PLN",
        units: 500,
      },
    },
    segments: [
      {
        departureAirport: {
          name: "Airport A",
        },
        departureTime: "2024-01-06T12:00:00",
        arrivalAirport: {
          name: "Airport B",
        },
        arrivalTime: "2024-01-06T15:00:00",
      },
    ],
  },
  {
    token: "def456",
    priceBreakdown: {
      total: {
        currency: "PLN",
        units: 700,
      },
    },
    segments: [
      {
        departureAirport: {
          name: "Airport X",
        },
        departureTime: "2024-01-06T14:00:00",
        arrivalAirport: {
          name: "Airport Y",
        },
        arrivalTime: "2024-01-06T17:30:00",
      },
      {
        departureAirport: {
          name: "Airport Y",
        },
        departureTime: "2024-01-06T18:00:00",
        arrivalAirport: {
          name: "Airport Z",
        },
        arrivalTime: "2024-01-06T20:00:00",
      },
    ],
  },
  // Add more data objects as needed
];

const fetchOffers = async (formValues) => {
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

  // const searchCriteria = {
  //   departureQuery: formValues.from,
  //   destinationQuery: formValues.to,
  //   departureDate: formValues.date,
  // };

  // console.log(searchCriteria);

  // const response = await axios.post(
  //   "http://localhost:8080/api/offer/search",
  //   searchCriteria
  // );

  // console.log(response);

  // return response.data.offers;
  return exampleData;
};

const anyTransfers = (offer) => {
  return offer.segments.length > 1;
};

const numberOfTransfers = (offer) => {
  return offer.segments.length;
};

const departureTime = (offer) => {
  return offer.segments[0].departureTime;
};

const arrivalTime = (offer) => {
  return offer.segments[offer.segments.length - 1].arrivalTime;
};

const renderTransfers = (offer) => {
  if (anyTransfers(offer)) {
    return (
      <div>
        <div>Przesiadki:</div>
        {offer.segments.map((segment, i) => (
          <div key={i}>
            Odlot: {segment.departureAirport.name} {segment.departureTime} |
            Przylot: {segment.arrivalAirport.name} {segment.arrivalTime}
          </div>
        ))}
      </div>
    );
  }
};

export const Results = () => {
  const { state } = useLocation();

  console.log("state", state);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: "planes",
    queryFn: () => fetchOffers(state?.values),
  });
  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <Header />
      <h2>Wyszukiwania</h2>
      {data?.map((offer) => (
        <NavLink
          to={`/results/${offer.token}`}
          key={offer.token}
          style={{ color: "white" }}
        >
          <div style={{ backgroundColor: "red", marginBottom: 20 }}>
            <b>
              Cena: {offer.priceBreakdown.total.units} PLN | Odlot:{" "}
              {departureTime(offer)} | Przylot: {arrivalTime(offer)} |
              Przesiadki: {numberOfTransfers(offer)}
            </b>
            {renderTransfers(offer)}
          </div>
        </NavLink>
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
