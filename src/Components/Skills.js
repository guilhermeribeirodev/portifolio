import React from "react";
import { skills } from "../Text";

export default function Skills() {
    return (
        <div className="section">
            <div className="section-content" id="skills">
                <h1>{skills.title}</h1>
                <ul className="skills">
                    {skills.text.map(item => (
                        <li><em>{item.area}</em> {item.tools}</li>
                    )) }
                </ul>
            </div>
        </div>
    )
}
