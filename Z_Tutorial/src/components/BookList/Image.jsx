import React from "react";
function Image({image}){             //if we want to directly use the props items we need to destruct them by {}
    return (
        <img src={image} className="image"/>
    );
};
// function Image(props){
//     return (
//         <img src={props.image} className="image"/>                    we can do both things
//     );
// };
export default Image