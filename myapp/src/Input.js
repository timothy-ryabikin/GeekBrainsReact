import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export default function Input(props) {
    const [inputValue, setInputValue] = useState("");

    const { onSubmit } = props;

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSubmit) {
            onSubmit(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="formArea">
            <TextField fullWidth autoFocus id="filled-basic" value={inputValue} placeholder=" Введите текст..." onChange={handleChange} className="text"> </TextField>
            <Button variant="contained" color="primary" type="submit">Кнопка  </Button>
        </form>
    );
}