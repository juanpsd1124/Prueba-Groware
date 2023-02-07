import './FoodList.css'
import { useContext } from 'react';
import axios from 'axios';

function FoodList ({foodInfo}) {

    const response = async () => {
        await axios.get('http://localhost:3000/foods')

        return response.data
    }

    const renderedElements = foodInfo.map( (food) => {

        return <div key={food.name} className="item">
            <p className="foodTitle">{food.name}</p>
            <p className="foodValue">{`Value: $ ${food.value}`}</p>
            <p className="foodType">{`Type: ${food.type}`}</p>
            <button>Edit</button>
        </div>
    });

    return <div className="foodlist">
            {renderedElements}
    </div>

}

export default FoodList