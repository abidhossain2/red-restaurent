import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FoodContext } from '../../App';
import { RiShoppingCart2Fill} from 'react-icons/ri'
import './BreakFastDetail.css'
const BreakFastDetail = () => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const [breakfastFoods] = useContext(FoodContext);
    const breakfastFood = breakfastFoods.find((breakfastFood) => breakfastFood.id == id);
    return (
        <div className='each-breakfast'>
            <img src={breakfastFood?.img} alt="" />
            <div className='breakfast-info'>
            <p className='name'>Light Breakfast</p>
            <p className='detail'>Food is any substance consumed to provide nutritional support for an organism. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms.</p>
            <p className='price'>${breakfastFood?.price}</p>
            <button> <RiShoppingCart2Fill className='cart'></RiShoppingCart2Fill>Add</button>
            </div>
        </div>
    );
};

export default BreakFastDetail;