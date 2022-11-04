import React, { useState } from "react";

const AddForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = ({
        nameError: '',
        ageError: '',
        emailError: ''
    });

    const [formIsValid, setFormIsValid] = useState(false);


    // const [user, setUser] = useState({
    // })

    handleChange = (e) => {
        console.log(e);
        if (e.target.id == 'name') {
            validateName(e.target.value);
        }
    }

    const validateName = (name) => {
        // if() {

        // }
        // else {

        // }

        setName(name);
        setError({ ...error, nameError });
        setFormIsValid();
    }
    return (
        <>
            <form>
                <label>Name</label>
                <input type='text' placeholder="Please enter name" id="name" onChange={handleChange} />
                <label>Age</label>
                <input type="number" placeholder='Please enter age' id="age" onChange={handleChange} />
                <label>Email</label>
                <input type="email" placeholder="Please enter email" id="email" onChange={handleChange} />
            </form>
        </>
    )
}

export default AddForm;


// js
//Type conversion: implicit coersion & Explicit conversion