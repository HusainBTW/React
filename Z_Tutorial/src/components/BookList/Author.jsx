import React from "react";
function Author({author}){
    const styles={
        letterSpacing: '3px',
    }
    return (
        <h2 style={{...styles , fontSize: '0.75rem', color: '#617d98', marginTop: '0.5rem'}}>{author.toUpperCase()}</h2>
    );
};
export default Author;