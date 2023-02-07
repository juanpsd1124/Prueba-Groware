import './FoodCreate.css'
const FoodCreate = () => {
    
    return <div className="foodCreateForm">
        <form className="form">
        <label for="FoodName">Food Name:</label>
        <input id="FoodName" type="text"/>
        <label for="FoodValue">Food Value:</label>
        <input id="FoodValue" type="text"/>
        <label for="FoodType">Food Type:</label>
        <input id="FoodType" type="text"/>
        <input type="submit" value="Submit"></input>
        </form>
    </div>
}

export default FoodCreate;