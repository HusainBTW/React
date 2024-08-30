import { useState } from "react";
function Button(){
    const userData = [
        {id: 1, name : "Akshit" , age : 20},
        {id: 2, name : "Husain" , age : 19},
        {id: 3, name : "lakshit" , age : 21},
    ]
    return (
        <div>
            {userData.map((el) => (
                <div
                key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.age}</p>
                </div>
            ))
        }
        </div>
    );
}
export default Button;