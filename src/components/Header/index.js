import './index.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='nav-bar'>
            <Link to='/airport'><h1>Hava Havai</h1></Link>
            <img className='image' src='https://www.w3schools.com/w3images/avatar2.png' alt='user' />
        </div>
    )
}

export default Header