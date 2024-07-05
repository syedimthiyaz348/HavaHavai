import './index.css'
import { FaHome } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import {Link} from 'react-router-dom'

const SideNavigation = () => {
    return(
        <div className='side-bar'>
            <div>
            <Link to="/"><h3><FaHome /> Home</h3></Link>
            <h3><TbGridDots /> Dashboard</h3>
            </div>
            <div>
                <h3>Services</h3>
                <Link to='/airport'><p>Airports</p></Link>
                <p>Videos</p>
            </div>
            <div>
                <h3>Others</h3>
                <p>List 1</p>
                <p>List 2</p>
                <p>List 3</p>
                <p>List 4</p>
            </div>
        </div>
    )
}

export default SideNavigation