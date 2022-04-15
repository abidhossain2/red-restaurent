import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DinnerItem.css'
const DinnerItem = (props) => {
    const navigate = useNavigate()
    const {img, name, detail, price,id} = props.dinnerItem
    return (
        <div className='dinner-item' onClick={() => navigate(`/dinnerItem/${id}`)}>
             <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className='detail'>{detail}</p>
            <p className='price'>${price}</p>
        </div>
    );
};

export default DinnerItem;