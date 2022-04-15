import React from 'react';
import './Lunch.css'
import UseLunchFood from '../../Hooks/UseLunchFood'
import LunchItem from '../../LunchItem/LunchItem';
const Lunch = () => {
    const [lunchFoods] = UseLunchFood()
    return (
        <div  style={{height: '70vh'}} className="lunch">
          {
              lunchFoods.map(lunchItem => <LunchItem
              key={lunchItem.id}
              lunchItem={lunchItem}
              ></LunchItem>)
          }
        </div>
    );
};

export default Lunch;