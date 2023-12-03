//strona z polami do wyszukiwania lotów - podaje się info skąd się leci, gdzie, kiedy i ile osób
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import logo4 from './assets/logo4.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

  const initialValues = {
    from: '',
    to: '',
    date: '',
    passengers: '',
  };

  const validationSchema = Yup.object({
    from: Yup.string().required('Required'),
    to: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    passengers: Yup.number().required('Required').positive('Must be a positive number'),
  });


  export const Mainp = () => {

    const navigate = useNavigate();
  
    const onSubmit = async (values) => {
      try {

        // Wyślij dane na backend za pomocą Axios

        // const response = await axios.post('...', values); //wpisać odpowiedni endpoint z backendu, zwrócić odpowiednie wartości

        // Tutaj możesz obsłużyć odpowiedź z backendu, np. pokazać komunikat sukcesu
        // i przekierować użytkownika do strony logowania

        //przekazuje props do Results

        navigate('/results');
  
      } catch (error) {
        console.error('Błąd podczas wysyłania danych:', error);

      }  
    };
  

  return (
    <div>
      <div className='mainframe'>
        <img className="img-m" src={logo4} alt="logo" style={{ width: 'auto', height: '70px' }} />
        <h2 style={{ marginLeft: '20px' }}>SkyHunt.</h2>
      </div>

      <div className='mainpframe'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '800px', width: '100%' }}>
          <h1 style={{ marginLeft: 10, marginBottom: 5 }}>Rozpocznij wyszukiwanie.</h1>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            <Form style={{ width: '100%' }}>
              <div className='form-control full-width'>
                <Field type='text' id='from' name='from' placeholder='Skąd' />
                <ErrorMessage name='from' />
              </div>

              <div className='form-control full-width'>
                <Field type='text' id='to' name='to' placeholder='Dokąd' />
                <ErrorMessage name='to' />
              </div>

              <div className='form-control full-width'>
                <Field type='date' id='date' name='date' />
                <ErrorMessage name='date' />
              </div>

              <div className='form-control full-width'>
                <Field type='number' id='passengers' name='passengers' placeholder='Liczba pasażerów' />
                <ErrorMessage name='passengers' />
              </div>
            </Form>

          </Formik>

          <button type='submit' style={{ width: '100%', marginTop: '10px' }}>Szukaj</button>
        </div>
      </div>
    </div>
  );
 };

export default Mainp;
