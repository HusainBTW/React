import React from "react";
import { Link } from 'react-router-dom';

function Home({entries}){

    return (
        <div>
            {entries.map((entry, index) => (
                <div key={index}>
                    <ul>
                        <li>
                            <Link to={`/entries/${index}`}> 
                                <h1>{entry.title}</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
};
export default Home;