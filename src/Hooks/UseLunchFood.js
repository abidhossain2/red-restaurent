import  { useContext, useEffect } from 'react';
import { FoodContext } from '../App';

const UseLunchFood= () => {
    const [lunchFoods, setLunchFoods] = useContext(FoodContext)
    useEffect( () => {
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunchFoods(data))
    }, [setLunchFoods])
    return [lunchFoods];
};

export default UseLunchFood;