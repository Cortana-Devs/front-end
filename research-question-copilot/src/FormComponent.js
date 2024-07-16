import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [academicLevel, setAcademicLevel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, academicLevel });
    };

    return ( <
        div className = "form-container" >
        <
        h1 > Research Questions Copilot < /h1> <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label htmlFor = "name" > Name: < /label> <
        input type = "text"
        id = "name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        placeholder = "John Doe"
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "email" > Email: < /label> <
        input type = "email"
        id = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        placeholder = "name@mail.com"
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "academicLevel" > Academic Level: < /label> <
        select id = "academicLevel"
        value = { academicLevel }
        onChange = {
            (e) => setAcademicLevel(e.target.value) }
        required >
        <
        option value = ""
        disabled > Select from the list < /option> <
        option value = "Undergraduate" > Undergraduate < /option> <
        option value = "Graduate" > Graduate < /option> <
        option value = "Postgraduate" > Postgraduate < /option> <
        /select> <
        /div> <
        div className = "button-group" >
        <
        button type = "button"
        className = "back-button" > Back < /button> <
        button type = "submit"
        className = "next-button" > Next < /button> <
        /div> <
        /form> <
        /div>
    );
};

export default FormComponent;