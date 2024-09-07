import React, { useState } from "react";

function Forms() {
    const [info, setInfo] = useState({ name: '', mail: '', message: '' });

    const onInput = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="name" 
                    value={info.name} 
                    onChange={onInput} 
                    type="text" 
                    placeholder="Name" 
                />
                <input 
                    name="mail" 
                    value={info.mail} 
                    onChange={onInput} 
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    name="message" 
                    value={info.message} 
                    onChange={onInput} 
                    type="text" 
                    placeholder="Message" 
                />
                <button type="submit">Submit</button>
            </form>
                <h1>{info.name}</h1>
                <h1>{info.mail}</h1>
                <h1>{info.message}</h1>
        </div>
    );
}

export default Forms;
