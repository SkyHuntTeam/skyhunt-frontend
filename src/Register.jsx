import { useState } from "react";
import { Separator } from "./components/Separator/Separator";


export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // const handleSubmit = (e) =>{
  //     e.preventDefault();
  //     console.log(email);
  // }
  return (
    <div className="container_r">
      <div style={{display:"flex"}}><h1 style={{marginLeft:10}}>Utwórz konto.</h1></div>
      <div style={{display:"flex"}}>
        <div className="column">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Imie"
            id="name"
            name="name"
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Nazwisko"
            id="surname"
            name="surname"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Login"
            id="email"
            name="email"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Hasło"
            id="password"
            name="password"
          />
          <input
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
            type="password"
            placeholder="Potwierdź Hasło"
            id="password2"
            name="password2"
          />
        </div>
        <Separator/>
        <div className="column">
          <input
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            placeholder="Ulica"
            id="street"
            name="street"
          />
          <div style={{display: "flex", justifyContent: 'space-between'}}>
          <input
          style={{width:'50%', marginRight:10,}}
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            type="text"
            placeholder="Kod Pocztowy"
            id="postcode"
            name="postcode"
          />
          <input
              style={{width:'100%', flexGrow:4}}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Miasto"
            id="city"
            name="city"
          />
          </div>
         
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            placeholder="Kraj"
            id="country"
            name="country"
          />
        <div style={{padding: 5, marginRight:10}}>
        <input type="checkbox" id="accept"/>
            <span> Akceptuję </span>
            <a href="">politykę prywatności </a>
            <span>oraz </span>
            <a href="">regulamin</a>
        </div>
        
          <button>Zarejejstruj się</button>
          <div onClick={() => props.onFormSwitch("login")}>Back to login</div>
        </div>
      </div>
    </div>
  );
};
export default Register;
