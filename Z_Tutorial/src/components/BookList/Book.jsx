import React from "react";
import Author from "./Author";
import Title from "./Title";
import Image from "./Image";
// function Book(props){
function Book({image , title , author , temp}){
    return (
        <article className="Book">
            <Image image={image} />
            <Title title={title} />
            <Author author={author} />
            <p>{temp}</p>
            {/* <p>{let x=6}</p> this will not run because it is not returning any value */}
            {/* <p>{6 + 6}</p>   this will run because it will return a value */}
        </article>
    );
};
export default Book;
// https://www.amazon.com/Best-Sellers_Books/zgbs/books/

// we can add const outside function inside function and also we can just add this in return 