import logo2 from './assets/logo2.png'
import{useState} from "react";
export const Login = (props) => {
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     console.log(email);
    // }
    return(
        <>
            <div className="container_l">
                
                <img src={logo2} alt="logo"/>
                <h1>Witaj!</h1>
                <span>zaloguj się do swojego konta</span>
                <input style={{width:'80%'}}value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Login" id="email" name="email" className="in"/>
                <input style={{width:'80%'}}value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Hasło" id="password" name="password" className="in"/>
                <button>Zaloguj się</button>
                <hr/>
                <span >Nie masz konta?</span><a onClick={() =>props.onFormSwitch('register')}>Zarejejstruj się</a>
            </div>
            
        </>
    )
}
export default Login