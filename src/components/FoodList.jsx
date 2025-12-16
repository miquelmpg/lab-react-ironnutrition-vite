
import { Input, Divider } from "antd";
import FoodBox from '../components/FoodBox';
import AddFoodForm from '../components/AddFoodForm';
import foodsJson from '../foods.json';
import { useState } from 'react';

function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
    const [search, setSearch] = useState("");

    const handleAddStudent = (newFood) => {
        setFoods([...foods, newFood]);
    }

    function removeFood(id) {
        const filteredFood = foods.filter((food) => food.id !== id);
        setFoods(filteredFood);
    }

    function handleSearch(event) {
        setSearch(event.target.value)
    }
    
    return (
        <div className="d-flex flex-column gap-3 align-items-center" style={{width: '800px'}}>
            <AddFoodForm newFood={handleAddStudent}></AddFoodForm>
            <Divider>Search</Divider>
            <Input name="name" type="text" value={search} onChange={handleSearch}/>
            <Divider>Food List</Divider>
            <div className="d-flex flex-wrap justify-content-center">
                {foods
                    .filter((food) => food.name.toLowerCase().includes(search))
                    .map((food) => (
                <FoodBox key={food.id} food={food} removeFood={removeFood}></FoodBox>
                ))}
            </div>
            {foods.length === 0 && ( <>
                <div className="mb-5"><b>Oops! There is no more content to show.</b></div>
                <img src="https://cdn-icons-png.flaticon.com/512/43/43533.png"  />
                </>
                )}
        </div>
    );
}

export default FoodList;