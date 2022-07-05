import React from "react";

const Skill2 = (props)=>(
    <div className="skills">
        <h3>My Skill Two</h3>
        <ul>
            <li>{props.skillA}</li>
            <li>{props.skillB}</li>
            <li>{props.skillC}</li>
        </ul>
    </div>
);
export default Skill2;