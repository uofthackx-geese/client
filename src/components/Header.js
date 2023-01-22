import './Header.css'
import { useNavigate } from "react-router-dom";

export const Header = ({ headerTitle, buttonLabel, buttonPathTo }) => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/chooseCountry');
    }

    return (
        <div id='header-parent'>
            <div style={{fontSize: '200%', fontWeight: 'bold', fontFamily: 'monospace', cursor: 'pointer'}} onClick={goToHome}>TripTailor</div>
            <div id='header-title'>{headerTitle}</div>
            {buttonPathTo && <div><button id='header-button' onClick={() => navigate(buttonPathTo)}>{buttonLabel.toUpperCase()}</button></div>}
        </div>
    )
}

export default Header
