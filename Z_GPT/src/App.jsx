import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link, useNavigate } from 'react-router-dom';
import Home from './components/Encyclopedia/Home';
import Create from './components/Encyclopedia/Create';
// import Random from './components/Encyclopedia/Random';   
import Error from './components/Encyclopedia/Error';
import EntryDetail from './components/Encyclopedia/EntryDetail';
import Header from './components/Encyclopedia/Header';
import Edit from './components/Encyclopedia/Edit';
import './App.css';

function App(){
    const [entries , setEntries] = useState([]);

    useEffect(() => {
        const defaultEntries = [
            { title: "Entry 1", content: "This is the first entry." },
            { title: "Entry 2", content: "This is the second entry." },
            { title: "Entry 3", content: "This is the third entry." },
            { title: "Entry 4", content: "This is the fourth entry." },
            { title: "Entry 5", content: "This is the fifth entry." }
        ];
        setEntries(defaultEntries);
    } , [])
    return (
        <div className='outerbody'>
        <Router>
            <div>
            <Header entries={entries}/>
            </div>
            <center>
            <div className='innerbody'>
            <Routes>
                <Route
                    path="/"
                    element={<Home entries={entries} />}
                />
                <Route
                    path="/create"
                    element={<Create setEntries={setEntries} entries={entries} />}
                />
                {/* <Route
                    path="/random/:index"
                    element={<Random entries={entries} />}
                /> */}
                <Route
                    path="/entries/:index"
                    element={< EntryDetail entries={entries} />}
                />
                <Route
                    path="/entries/:index/edit"
                    element={<Edit entries={entries} setEntries={setEntries}/>}
                />
                <Route
                    path="*"
                    element={<Error/>}
                />
            </Routes>
            </div>
            </center>
        </Router>
        </div>
    );
};
export default App;