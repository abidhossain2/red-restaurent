import React from 'react';
import './DinnerItem.css'
const DinnerItem = (props) => {
    const {img, name, detail, price} = props.dinnerItem
    return (
        <div className='dinner-item'>
             <img src={img} alt="" />
            <p className='name'>{name}</p>
            <p className='detail'>{detail}</p>
            <p className='price'>${price}</p>
        </div>
    );
};

export default DinnerItem;