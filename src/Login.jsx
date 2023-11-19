import { NavLink, useHistory } from 'react-router-dom';
import { useMutation } from 'react-query'; // Importuj useMutation
import logo2 from './assets/logo2.png';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const history = useHistory();

  // Użyj useMutation do obsługi mutacji uwierzytelniania
  const mutation = useMutation((values) =>
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(values)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      return response.json(); // Zakładamy, że backend zwraca token JWT w odpowiedzi
  
    })
  );

  const onSubmit = async (values) => {
    try {
	const data = await mutation.mutateAsync(values);


  	  // Przechowaj token w stanie aplikacji, np. w localStorage
 	   localStorage.setItem('authToken', data.token);

      // Przekieruj użytkownika na inną stronę po pomyślnym uwierzytelnieniu
      history.push('/main');

    } catch (error) {
      console.error('Authentication error', error);
      // Obsłuż błąd uwierzytelniania, np. wyświetl komunikat błędu
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="container_l">
          <img src={logo2} alt="logo" />
          <h1>Witaj!</h1>
          <span>zaloguj się do swojego konta</span>
          <Form>
            <div className="form-control">
              <Field
                type="email"
                id="email"
                name="email"
                style={{ width: '80%' }}
                placeholder="Email"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="form-control">
              <Field
                type="password"
                id="password"
                name="password"
                style={{ width: '80%' }}
                placeholder="Hasło"
              />
              <ErrorMessage name="password" />
            </div>

            {/* Przekierowanie do /main po zalogowaniu */}
            <button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? 'Logowanie...' : 'Zaloguj'}
            </button>
          </Form>
          <hr />
          <span>Nie masz konta?</span>

          <nav>
            <NavLink to="register">Zarejestruj się</NavLink>
          </nav>
        </div>
      </Formik>
    </>
  );
};

export default Login;
