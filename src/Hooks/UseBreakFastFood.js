import  { useContext, useEffect } from 'react';
import { FoodContext } from '../App';

const UseBreakFastFood = () => {
    const [breakfastFoods, setBreakfastFoods] = useContext(FoodContext)
    useEffect( () => {
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfastFoods(data))
    }, [setBreakfastFoods])
    return [breakfastFoods];
};

export default UseBreakFastFood;