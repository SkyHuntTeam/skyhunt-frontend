import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo4 from './assets/logo4.png'; // Importuj logo4
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  const initialValues = {
    from: "",
    to: "",
    date: "",
    passengers: "",
  };

  const validationSchema = Yup.object({
    from: Yup.string().required("Required"),
    to: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    passengers: Yup.number()
      .required("Required")
      .positive("Must be a positive number"),
  });

// const sendFormDataToBackend = async (params) => {
//   const response = await axios.  navigate('/results');('backendurl', params);
//   console.log('Odpowiedź z backendu:', response.data)
  
// };


export const Mainp = () => {
  const navigate = useNavigate();

  //  const { isLoading, error, mutate } = useMutation(
  //    (params) => sendFormDataToBackend(params),
  //    {
  //      onSuccess: () => {
  //        console.log("data send succesfuly!!");
  //        queryClient.invalidateQueries([
  //           "sendForm"            
  //        ]);

  //      },
  //      onError: () => {
  //        console.log("Error - send form data");
  //      },
  //    }
  //  );
  
  const onSubmit = values => {
    console.log('Search form data', values);
    navigate("/results", values);
    // request mutate
    // react router przekierowania na strone z wynikami.
  };

  return (
    <div>
      <div className="mainframe">
        <img
          className="img-m"
          src={logo4}
          alt="logo"
          style={{ width: "auto", height: "70px" }}
        />
        <h2 style={{ marginLeft: "20px" }}>SkyHunt.</h2>
      </div>
      <div className="mainpframe">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <h1 style={{ marginLeft: 10, marginBottom: 5 }}>
            Rozpocznij wyszukiwanie.
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ width: "100%" }}>
              <div className="form-control full-width">
                <Field type="text" id="from" name="from" placeholder="Skąd" />
                <ErrorMessage name="from" />
              </div>
              <div className="form-control full-width">
                <Field type="text" id="to" name="to" placeholder="Dokąd" />
                <ErrorMessage name="to" />
              </div>
              <div className="form-control full-width">
                <Field type="date" id="date" name="date" />
                <ErrorMessage name="date" />
              </div>
              <div className="form-control full-width">
                <Field
                  type="number"
                  id="passengers"
                  name="passengers"
                  placeholder="Liczba pasażerów"
                />
                <ErrorMessage name="passengers" />
              </div>
              <button type="submit" style={{ width: "100%", marginTop: "10px" }}>
              Szukaj
            </button>
            </Form>
            
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Mainp;
