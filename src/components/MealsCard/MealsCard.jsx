import './MealsCard.css';
import { useSelector } from 'react-redux';

function MealsCard(props) {
    const meal = props.meal;
    return (
        <div className="mealPanel">
            
            <li>{meal.restaurant_name}</li>
            <li>Price Level: {meal.price_level}</li>
            <li>Google Rating: {meal.rating}</li>
            <button className='btn btn_sizeFull'>Cancel Meal</button>
            
        </div>
        )

}

export default MealsCard;


