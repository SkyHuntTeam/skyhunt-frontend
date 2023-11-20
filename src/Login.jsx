import { NavLink } from 'react-router-dom';
import logo2 from './assets/logo2.png'
//import{useState} from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; // Dodaj import
//przy odzwiezaniu strony, niekoniecznie na razie

import { useAuth } from './AuthContext';


export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const onSubmit = async (values) => {
      try {
        // Wyślij dane na backend za pomocą Axios
        const response = await axios.post('http://localhost:8080/api/user/login', values);


        console.log('Odpowiedź z backendu:', response.data);

        login(response.data);
  
        // Tutaj możesz obsłużyć odpowiedź z backendu, np. pokazać komunikat sukcesu
        // i przekierować użytkownika do strony logowania

        // Przechowaj token w stanie aplikacji, np. w localStorage
        // Pobierz token z odpowiedzi i zapisz w ciasteczku
       const token = response.data.token;
       Cookies.set('authToken', token);

        navigate('/main');


      } catch (error) {
        console.error('Błąd podczas wysyłania danych:', error);
  
        // Tutaj możesz obsłużyć błąd, np. pokazać komunikat o błędzie
      }
    };



    const initialValues ={
        email:'',
        password:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required")
    })

    
    return(
        <>
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
               <div className="container_l">
                <img src={logo2} alt="logo"/>
                <h1>Witaj!</h1>
                <span>zaloguj się do swojego konta</span>
                <Form>
                <div className="form-control">
                <Field type='email' id='email' name = 'email' style={{width:'80%'}} placeholder="Email"  />
                <ErrorMessage name='email'/>
                </div>
                <div className="form-control">
                <Field type='password' id='password' name = 'password' style={{width:'80%'}} placeholder="Hasło" />
                <ErrorMessage name='password'/>
                </div>
                <button type='submit'>Zaloguj</button>
                </Form>               
                <hr/>
                <span >Nie masz konta?</span>
                
                <nav>
                    <NavLink to='register'>Zarejejstruj się</NavLink>
                </nav>
                </div> 
            </Formik>
            
        </>
    )
}

export default Login
