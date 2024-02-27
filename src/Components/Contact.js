import pdf from "../images/GuilhermeRibeiroCV2024.pdf";
import document from "../images/document.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import React from "react";
import { contact } from "../Text";

export default function Contact (){
    return (
        <div className="section">
            <div className="section-content" id="contact">
                <h1>{contact.title}</h1>
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
}
