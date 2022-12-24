import React from "react";

// We use Router in order to defin the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components in our app
import NavBar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<RecordList/>} />
                <Route path="/edit/:id" element={<Edit/>} />
                <Route path="/create" element={<Create/>}/>
            </Routes>
        </div>
    );
};

export default App;