import './Header.css'
import { useNavigate } from "react-router-dom";

export const Header = ({ title, pathTo }) => {
    const navigate = useNavigate()
    return (
        <div id='header-parent'>
            <div style={{fontSize: '200%', fontWeight: 'bold', fontFamily: 'monospace'}}>TripTailor</div>
            <div id='header-title'>{title === 'Travel Plan' ? 'Explore': title}</div>
            {pathTo && <div><button id='header-button' onClick={() => navigate(pathTo)}>{title.toUpperCase()}</button></div>}
        </div>
    )
}

export default Header
