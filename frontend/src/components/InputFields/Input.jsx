import React from "react";
import '../Edit/edit.css'
const Input = (props) => {
    const { data, setData, label, inputType, classStyle } = props;
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? (
                <textarea
                    className={classStyle}
                    onChange={(e) => setData(e.target.value)}
                    placeholder={data}
                />
            ) : (
                <input
                    type="text"
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />
            )}
        </>
    );
};

export default Input;
