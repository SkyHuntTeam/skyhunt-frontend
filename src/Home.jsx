import logo3 from './assets/logo3.png'
import { NavLink } from 'react-router-dom';
export const Home = () => {
    return(
        <div>
        <div className="c_home">
            <h2>SkyHunt.</h2>
            <h1 className="napis_home">Dokąd dziś polecisz?</h1>
            <button className="b_h">
                <NavLink to='/main' style={{ color: 'white' }}>Rozpocznij</NavLink>
            </button>
            {/* <nav>
            
                    <NavLink to='Mainp'></NavLink>
                </nav> */}
            
            <img className="img_h" src={logo3}  alt="logo"/>
        </div>
        <div className='napis_home2'>
        <p >SkuHunt to aplikacja internetowa umożliwiającaj rezerwację lotów. Wyszukiwarka poda dostępne opcje lotów na podstawie destynacji, daty, możliwych przesiadek
                 oraz ilości osób. Użytkownik będzie mógł utworzyć konto, na którym będą przechowywane dokonane rezerwacje oraz bieżące saldo.</p>
        </div>
        </div>
    )
}
export default Home