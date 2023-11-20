import { Separator } from "./components/Separator/Separator";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  street: '',
  postcode: '',
  city: '',
  country: '',
  accept: false
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required("Required"),
  street: Yup.string().required("Required"),
  postcode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  accept: Yup.boolean().oneOf([true], 'Musisz zaakceptować politykę prywatności i regulamin.')
});

export const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      // Wyślij dane na backend za pomocą Axios
      const response = await axios.post('http://localhost:8080/api/user/register', values);
      console.log('Odpowiedź z backendu:', response.data);

      // Tutaj możesz obsłużyć odpowiedź z backendu, np. pokazać komunikat sukcesu
      // i przekierować użytkownika do strony logowania
      navigate('/login');
    } catch (error) {
      console.error('Błąd podczas wysyłania danych:', error);

      // Tutaj możesz obsłużyć błąd, np. pokazać komunikat o błędzie
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container_r">
        <Form>
          <div style={{ display: "flex" }}><h1 style={{ marginLeft: 10 }}>Utwórz konto.</h1></div>
          <div style={{ display: "flex" }}>
            <div className="column">
              <div className="form-control">
                <Field type='text' id='name' name='name' placeholder="Imie" />
                <ErrorMessage name='name' />
              </div>
              <div className="form-control">
                <Field type='text' id='surname' name='surname' placeholder="Nazwisko" />
                <ErrorMessage name='surname' />
              </div>
              <div className="form-control">
                <Field type='email' id='email' name='email' placeholder="Email" />
                <ErrorMessage name='email' />
              </div>
              <div className="form-control">
                <Field type='password' id='password' name='password' placeholder="Hasło" />
                <ErrorMessage name='password' />
              </div>
              <div className="form-control">
                <Field type='password' id='confirmPassword' name='confirmPassword' placeholder="Potwierdź hasło" />
                <ErrorMessage name='confitmPassword' />
              </div>
            </div>
            <Separator />
            <div className="column">
              <div className="form-control">
                <Field type='text' id='street' name='street' placeholder="Ulica" />
                <ErrorMessage name='street' />
              </div>
              <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div className="form-control">
                  <Field type='text' id='postcode' name='postcode' placeholder="Kod Pocztowy" style={{ width: '50%' }} />
                  <ErrorMessage name='postcode' />
                </div>
                <div className="form-control">
                  <Field type='text' id='city' name='city' placeholder="Miasto" style={{ width: '80%', marginLeft: -25, flexGrow: 4 }} />
                  <ErrorMessage name='city' />
                </div>
              </div>
              <div className="form-control">
                <Field type='text' id='country' name='country' placeholder="Kraj" />
                <ErrorMessage name='country' />
              </div>
              <div style={{ padding: 5, marginRight: 10 }}>
                <div className="form-control">
                  <Field type="checkbox" id="accept" name="accept" />
                </div>
                <span> Akceptuję </span>
                <a href="">politykę prywatności </a>
                <span>oraz </span>
                <a href="">regulamin</a>
              </div>
              <button type='submit'>Zarejestruj się</button>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Register;
