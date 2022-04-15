import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BreakfastItem.css'
const BreakfastItem = (props) => {
    const navigate = useNavigate()
    const {img, name, detail, price,id} = props.breakfastItem;
    return (
        <div className='breakfast-item' onClick={() => navigate(`/breakfastItem/${id}`)}>
            <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className='detail'>{detail}</p>
            <p className='price'>${price}</p>
        </div>
    );
};

export default BreakfastItem;