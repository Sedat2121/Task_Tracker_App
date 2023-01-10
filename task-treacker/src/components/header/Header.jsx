import React from "react";

import TaskPng from "../../assets/TaskPng";


const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-evenly align-items-center"></div>
            <TaskPng/>
            <h1>TASK TRACKER</h1>
        </div>
    )
}

export default Header;