import logo4 from './assets/logo4.png'
import { NavLink } from 'react-router-dom';
export const Mainp = () => {
    return(
        <div>
        <div className='mainframe'>
            <img className="img_m" src={logo4}  alt="logo" style={{ width: 'auto', height: '70px' }}/>
            <h2 style={{ marginLeft: '20px' }}>SkyHunt.</h2>
            
            <button className="b_m" style={{ marginLeft: '400px'}}>
                <NavLink to='/' style={{ color: 'black' }}>Zaloguj</NavLink>
            </button>
            <button className="b_m" style={{ marginLeft: '10px'}}>
                <NavLink to='/register' style={{ color: 'black', textAlign: 'center' }}>Zarejejstruj</NavLink>
            </button> 
        </div>
        <div className='mainpframe'>
            <div style={{display:"flex", flexDirection: 'column'}}><h1 style={{marginLeft:10}}>Rozpocznij wyszukiwanie.</h1></div>
        </div>
        
        </div>
    )
}
export default Mainp