import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

function EntryDetail({entries}){
    const {index} = useParams();
    const entry  = entries[index];
    const navigate = useNavigate();

    if(!entry){
        return <Error message='Entry not found'/>;
    }
    const goEdit = () => navigate(`/entries/${index}/edit`);
    return(
        <div style={{}}>
            <h1>{entry.title}</h1>
            <button onClick={goEdit}>Edit Page</button>
            <div style={{border: '2px solid grey' , height:'400px' , borderRadius:'50px'}}>
                <p>{entry.content}</p>
            </div>
        </div>
    );
};
export default EntryDetail;