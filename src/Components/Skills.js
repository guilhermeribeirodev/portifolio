import React from "react";
import { skills } from "../Text";

export default function Skills() {
    return (
        <div className="section">
            <div className="section-content" id="skills">
                <h1>{skills.title}</h1>
                <ul className="skills">
                    <li>Programming Languages: Java, JavaScript, Python</li>
                    <li>Frameworks: Spring, Hibernate, Play</li>
                    <li>Libraries: NodeJS, ReactJS, jQuery</li>
                    <li>Software Development Methods: Agile/SCRUM, Lean Start up</li>
                    <li>Development Tools: Eclipse, NetBeans, IntelliJ, Visual Studio Code, Git</li>
                    <li>Operating Systems: Linux, macOS</li>
                    <li>Cloud Providers: AWS, GCP, Azure</li>
                    <li>Management Skills: Project Management, Technical Leadership, Liaising with Stakeholders</li>
                    <li>Leadership Strengths: Mentoring, Designing Training Materials, 1-1 Skills Training</li>
                </ul>
            </div>
        </div>
    )
}
