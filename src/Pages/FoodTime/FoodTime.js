import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './FoodTime.css'
const FoodTime = () => {
    return (
        <>
        <div className='food-time'>
            <CustomLink className="food-link" to='breakfast'>Breakfast</CustomLink>
            <CustomLink className="food-link" to='lunch'>Lunch</CustomLink>
            <CustomLink className="food-link" to='dinner'>Dinner</CustomLink>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        </>
    );
};

export default FoodTime;