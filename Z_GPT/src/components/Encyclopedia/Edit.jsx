import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPage({ entries, setEntries }) {
    const { index } = useParams();
    const entry = entries[index];
    const navigate = useNavigate();

    // Initialize the state with the current entry's title and content
    const [title, setTitle] = useState(entry.title);
    const [content, setContent] = useState(entry.content);

    // Handle the save functionality
    const handleSave = () => {
        // Create a new array with the updated entry
        const updatedEntries = [...entries];
        updatedEntries[index] = { ...entry, title, content }; // Update title and content
        setEntries(updatedEntries); // Update the state
        navigate(`/entries/${index}`); // Redirect to the updated entry
    };

    // Handle the delete functionality
    const handleDelete = () => {
        const updatedEntries = entries.filter((_, i) => i !== parseInt(index)); // Remove the entry
        setEntries(updatedEntries); // Update the state
        navigate("/"); // Redirect to home
    };

    return (
        <div>
            <h1>Edit: " {entry.title} "</h1>
            <div>
                <textarea
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    rows="2"
                    cols="30"
                    style={{borderRadius:'7px'}}
                />
            </div>
            <div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="20"
                    cols="70"
                    style={{borderRadius:'10px'}}
                />
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleDelete} style={{ marginLeft: "10px", backgroundColor: "#FF9999" }}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default EditPage;
