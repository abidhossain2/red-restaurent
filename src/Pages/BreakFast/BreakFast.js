import React from 'react';
import UseBreakFastFood from '../../Hooks/UseBreakFastFood';
import BreakfastItem from '../BreakfastItem/BreakfastItem';
import './BreakFast.css'
const BreakFast = () => {
    const [breakfastFoods] = UseBreakFastFood([])
    return (
        <div style={{height: '70vh'}} className="break-fast">
           {
               breakfastFoods.map(breakfastItem => <BreakfastItem
               key={breakfastItem.id}
               breakfastItem={breakfastItem}
               ></BreakfastItem>)
           }
        </div>
    );
};

export default BreakFast;