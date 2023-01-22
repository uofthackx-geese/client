import React, {useState} from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";

export const Header = ({page}) => {
    const navigate = useNavigate()
    return (
        <div id='header-parent'>
            <div style={{fontSize: '200%', fontWeight: 'bold', fontFamily: 'monospace'}}>TripTailor</div>
            <div id='header-title'>{page ? page.toLowerCase() : ''}</div>
            {page && <div><button id='header-button' onClick={() => navigate(page === 'EXPLORE' ? '/explore' : '/travelplan')}>{page}</button></div>}
        </div>
    )
}

export default Header
