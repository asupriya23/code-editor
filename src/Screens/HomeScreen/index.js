import "./index.scss"
import React from "react";

export const HomeScreen = () => {
    return (
        <div className="home-container">
            
            <div className="left-container">
                <div className="items-container">
                    <img src="logo.png" />
                    <h1>Binary Beats</h1>
                    <h2>Code.Compile.Debug</h2>
                    <button>Get Set Code</button>
                </div>
            </div>
            
            <div className="right-container">
                <h1>right side</h1>
            </div>
        </div>
    );
};
