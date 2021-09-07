import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={TeslaLogo} alt='Tesla logo'/>
            </div>
            <div className='header__center'>
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Powerwall</p>
                <p>Charging</p>
            </div>

            <div className='header__right'>
                <p>Home</p>
                <p>Account</p>
            </div>
        </div>
    )
}

export default Header;