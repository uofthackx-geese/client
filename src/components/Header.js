import React, {useState} from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";

export const Header = ({page}) => {
    const navigate = useNavigate()
    return (
        <div id='header-parent'>
            <div style={{fontSize: '150%', fontWeight: 'bold'}}>[APP NAME]</div>
            <div id='header-title'>{page === "EXPLORE" ? "Travel Plan": "Explore"}</div>
            <div><button id='header-button' onClick={() => navigate(page === 'EXPLORE' ? '/explore' : '/travelplan')}>{page}</button></div>
        </div>
    )
}

export default Header
