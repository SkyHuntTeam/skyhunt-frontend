// import { usePlaneData } from "./hooks/usePlaneData";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Header } from "./Header";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
      <Header />
      <div className="planeframe">
        <p className="pp">plane id: {planeId}</p>
        <p className="pp"> id: {data.id}</p>
        <p className="pp"> model: {data.model}</p>
      </div>
      <Formik>
        <Form>
          <div className="planeframe2">
            <div className="form-control">
              <Field
                type="text"
                id="name"
                name="name"
                style={{ width: "85%" }}
                placeholder="Imie"
              />
              <ErrorMessage name="name" />
            </div>
            <div className="form-control">
              <Field
                style={{ width: "85%" }}
                type="text"
                id="surname"
                name="surname"
                placeholder="Nazwisko"
              />
              <ErrorMessage name="surname" />
            </div>
            <div className="form-control">
              <Field
                type="text"
                id="pesel"
                name="pesel"
                placeholder="Pesel"
                style={{ width: "85%" }}
              />
              <ErrorMessage name="pesel" />
            </div>
          </div>
        </Form>
      </Formik>
      <BookPlane planeId={planeId} />
    </div>
  );
};
