import React from 'react';
import UseDinner from '../../Hooks/UseDinner';
import DinnerItem from '../DinnerItem/DinnerItem';
import './Dinner.css'
const Dinner = () => {
    const [dinnerFoods] = UseDinner()
    return (
        <div   style={{height: '70vh'}} className="dinner">
            {
                dinnerFoods.map(dinnerItem => <DinnerItem
                key={dinnerItem.id}
                dinnerItem={dinnerItem}
                ></DinnerItem>)
            }
        </div>
    );
};

export default Dinner;