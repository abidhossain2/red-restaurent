import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FoodContext } from '../../App';
import './LunchDetail.css'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import{HiPlusSm,HiMinusSm} from 'react-icons/hi'
const LunchDetail = () => {
    const [count, setCount] = useState(0)
    const { id } = useParams();
    const [lunchFoods] = useContext(FoodContext);
    const lunchFood = lunchFoods.find((lunchFood) => lunchFood.id == id);
    const increase = () => {
        const newcount = count + 1;
        setCount(newcount)
    }
    const decrease = () => {
        if (count > 0) {
            const newcount = count - 1;
            setCount(newcount)
        }
    }
    return (
        <div className='each-lunch'>
            <img src={lunchFood?.img} alt="" />
            <div className='lunch-info'>
                <p className='name'>Heavy Lunch</p>
                <p className='detail'>Food is any substance consumed to provide nutritional support for an organism. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms.</p>
                <div className='amount-price'>
                    <p className='price'>${lunchFood?.price}</p>
                    <div className='amount'>
                        <HiMinusSm className='minus' onClick={decrease}></HiMinusSm> <input type="text" value={count} /> <HiPlusSm className='plus' onClick={increase}></HiPlusSm>
                    </div>
                </div>
                <button> <RiShoppingCart2Fill className='cart'></RiShoppingCart2Fill>Add</button>
            </div>
        </div>
    );
};

export default LunchDetail;