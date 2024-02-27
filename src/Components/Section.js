import React from "react";
import gui from "../images/gui-profile.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import document from "../images/document.png";
import pdf from "../images/GuilhermeRibeiroCV2024.pdf";
import PortifolioItem from "./PortifolioItem";
import Experience from "./Experience";

export default function Section({title, text, dark, id}) {

    const about = (
        <div className={"section" + (dark ? " section-dark" : " section-white")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <div className="profile-picture-container">
                    <img
                        src={gui}
                        className="profile-picture"
                        alt="Gui"
                    />
                </div>
                <p>{text}</p>
            </div>
        </div>
    )

    const skills = (
        <div className={"section" + (dark ? " section-dark" : " section-white")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
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

    const portifolio = (
        <div className={"section" + (dark ? " section-dark" : " section-white")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <PortifolioItem/>
            </div>
        </div>
    )

    const experience = (
        <div className={"section" + (dark ? " section-dark" : " section-white")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <Experience/>
            </div>
        </div>
    )

    const contact = (
        <div className={"section" + (dark ? " section-dark" : " section-white")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <div className="social-media">
                    <ul>
                        <li>
                            <a href={pdf} target="_blank">
                                <img
                                    src={document}
                                    className="logo-picture"
                                    alt="document"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:guilhermeribeirodev@gmail.com" target="_blank">
                                <img
                                    src={email}
                                    className="logo-picture"
                                    alt="email"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/developergui/" target="_blank">
                                <img
                                    src={linkedin}
                                    className="logo-picture"
                                    alt="linkedin"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/guilhermeribeirodev" target="_blank">
                                <img
                                    src={github}
                                    className="logo-picture"
                                    alt="github"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )

    const section = (
        <div className={"section" + (dark ? " section-dark" : " section-white")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )

    if (title === "About") {
        return about;
    } else if (title === "Skills") {
        return skills;
    } else if (title === "Portifolio") {
        return portifolio;
    } else if (title === "Experience") {
        return experience;
    } else if (title === "Contact") {
        return contact;
    } else {
        return section;
    }
}
