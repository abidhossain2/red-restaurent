import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FoodContext } from '../../App';
import './LunchDetail.css'
import {RiShoppingCart2Fill } from 'react-icons/ri'
const LunchDetail = () => {
    const { id } = useParams();
    const [lunchFoods] = useContext(FoodContext);
    const lunchFood = lunchFoods.find((lunchFood) => lunchFood.id == id);
    return (
        <div className='each-lunch'>
            <img src={lunchFood?.img} alt="" />
            <div className='lunch-info'>
            <p className='name'>Heavy Lunch</p>
            <p className='detail'>Food is any substance consumed to provide nutritional support for an organism. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms.</p>
            <p className='price'>${lunchFood?.price}</p>
            <button> <RiShoppingCart2Fill className='cart'></RiShoppingCart2Fill>Add</button>
            </div>
        </div>
    );
};

export default LunchDetail;