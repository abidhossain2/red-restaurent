import  { useEffect, useState } from 'react';

const UseDinner= () => {
    const [dinnerFoods, setDinnerFoods] = useState([])
    useEffect( () => {
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinnerFoods(data))
    }, [])
    return [dinnerFoods];
};

export default UseDinner;