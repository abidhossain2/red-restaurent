import React from 'react';
import './Header.css'
import logo from '../../images/logo2.png'
import banner from '../../images/bannerbackground.png'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import FoodTime from '../FoodTime/FoodTime';

const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='link'>
                    <RiShoppingCart2Fill className='cart'></RiShoppingCart2Fill>
                    <button className='login'>login</button>
                    <button className='signup'>Signup</button>
                </div>
            </div>
            <div className='banner'>
                <img src={banner} alt="" />
                <p className='banner-txt'>Best Food Waiting For Your Belly</p>
                <input type="search" name="" className="search-field" placeholder='Search food' />
                <button className='search-btn'>Search</button>
            </div>
            <FoodTime></FoodTime>
        </>
    );
};

export default Header;