import React , { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create({ setEntries , entries }){
    const [title , setTitle] = useState('');
    const [content , setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(title && content){
            const newEntry = { title , content };
            const updatedEntries = [...entries, newEntry];
            setEntries(updatedEntries);
            setTitle('');
            setContent('');
            const newEntryIndex = updatedEntries.length - 1;
            navigate(`/entries/${newEntryIndex}`);
        }
        else{
            alert("Please enter both  a title and content.");
        }
    };

    return(
        <div>
            {/* <h1>Create Page</h1> */}
            <button
                onClick={handleSubmit}
                style={{width: '500px' , height: '50px' , paddingBottom: '0px' , border:'none' , backgroundColor:'white' , fontSize:'19px'}}
            ><h1>Create Page</h1></button>
            <br/>
            <br/>
            <textarea 
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{borderRadius:'7px'}}
            ></textarea>
            <br/>
            <textarea 
                placeholder="Enter your Content here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="contenttext"
            ></textarea>
            <br/>
        </div>
    );
};
export default Create;