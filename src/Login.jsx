import { NavLink } from 'react-router-dom';
import logo2 from './assets/logo2.png'
//import{useState} from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";


export const Login = () => {
    const initialValues ={
        email:'',
        password:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = values => {
        console.log('Form data', values)
    }
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
