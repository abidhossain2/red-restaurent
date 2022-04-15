import React from 'react';
import { useNavigate } from 'react-router-dom';
import './lunchItem.css'
const LunchItem = (props) => {
    const{img, name, detail, price,id} = props.lunchItem
    const navigate = useNavigate()
    return (
        <div className='lunch-item'  onClick={() => navigate(`/lunchItem/${id}`)}>
            <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className='detail'>{detail}</p>
            <p className='price'>${price}</p>
        </div>
    );
};

export default LunchItem;