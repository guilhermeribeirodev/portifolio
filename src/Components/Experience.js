import React from "react";
import ExperienceItems from "./ExperienceItems";
import { experience } from "../Text";


export default function Experience () {
    return (
        <div className="section">
            <div className="section-content" id="experience">
                <h1>Experience</h1>
                <ExperienceItems />
            </div>
        </div>
    )
}
