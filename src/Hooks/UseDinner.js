import  { useContext, useEffect } from 'react';
import { FoodContext } from '../App';

const UseDinner= () => {
    const [dinnerFoods, setDinnerFoods] = useContext(FoodContext)
    useEffect( () => {
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinnerFoods(data))
    }, [setDinnerFoods])
    return [dinnerFoods];
};

export default UseDinner;