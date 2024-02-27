import React from "react";
import gui from "../images/gui-profile.png";
import { about } from "../Text";


export default function About() {
    return (
        <div className="section">
            <div className="section-content" id="about">
                <h1>{about.title}</h1>
                <div className="profile-picture-container">
                    <img
                        src={gui}
                        className="profile-picture"
                        alt="Gui"
                    />
                </div>
                <p>{about.text}</p>
            </div>
        </div>
    )
}
