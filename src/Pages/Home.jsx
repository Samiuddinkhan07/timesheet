import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.jsx";

const HomePage = () =>{
    return (
        <>
            <div className="App">
                <div className="header-comp">
                    <Header/>
                </div>
                <div className="main">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default HomePage;