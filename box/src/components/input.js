import React, { useState } from 'react';

const Input = ({setBox, box}) => {
    const [newColor, setNewColor] = useState("");

    const onColorChange = (e) =>{
        setNewColor(e.target.value);
    };

    const grabColor = () => {
        setBox({
            ...box,
            colors: [...box.colors, newColor],
        });
        setNewColor("");
    };

    return (
        <div class="input-group">
            <input
            onChange={onColorChange}
            type="text"
            class="form-control"
            name="newColor"
            value={newColor}
            />
            <div class="input-group-change">
                <button onClick={grabColor} class="btn btn-primary">
                    Add Box
                </button>
            </div>
        </div>
    );
};

export default Input;