
import { Divider, Input, Button } from "antd";
import { useState } from "react";

const initialForm = {
    id: "",
    name: "",
    image: "",
    calories: 0,
    servings: 0,
}

function AddFoodForm({ newFood }) {
    const [form, setForm] = useState(initialForm);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        newFood(form);

        setForm(initialForm);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input name="name" type="text" value={form.name} onChange={handleChange}/>

            <label>Image</label>
            <Input name="image" type="text" value={form.image} onChange={handleChange}/>

            <label>Calories</label>
            <Input name="calories" type="number" value={form.calories} onChange={handleChange}/>

            <label>Servings</label>
            <Input name="servings" type="number" value={form.servings} onChange={handleChange}/>
            
            <Button htmlType="submit" type="submit">Create</Button>
        </form>
    );
}

export default AddFoodForm;