import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "./Error";

function Header({entries}){
    const navigate = useNavigate();
    const [searchTerm , setSearchTerm] = useState('');

    const goHome = ()=> navigate('/');
    const goCreate = ()=> navigate('/create');

    const handleRandom=()=>{
        const randIndex = Math.floor(Math.random() * entries.length);
        // Navigate to the random entry's route
        navigate(`/entries/${randIndex}`, { replace: true });
    }
    const handleSearch=()=>{
        const foundEntry = entries.find(entry =>
            entry.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (foundEntry) {
            const index = entries.indexOf(foundEntry);
            navigate(`/entries/${index}`);
        } 
        else {
            navigate('/error', { state: { message: `No entry found for "${searchTerm}"` } });
            // <Error message={`No entry found for "${searchTerm}"`} />
        }
        setSearchTerm('');
    } 
    return (
        <center>
        <div className="header">
            <div className="menu">
                <button onClick={goHome}>Home</button>
                <button onClick={goCreate}>Create</button>
                <button onClick={handleRandom}>Random</button>
            </div>
            <div className="search">
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="searchbar"
                    />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        </center>
    );
};
export default Header;