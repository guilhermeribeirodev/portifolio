import React, {Component} from "react";
import { experience } from "../Text";

export default class ExperienceItems extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.experience = experience;
        //this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <>
                <div className="experience">
                    {this.experience.map(item => (
                        <ul>
                            <li>
                                <h3>{item.company}<em>{item.date}</em></h3>
                                <h4>{item.role}</h4>
                                <ul className="experiences">
                                {item.tasks?.map(skill => (
                                    <li>{skill}</li>
                                ))}
                                </ul>
                            </li>
                        </ul>
                    ))}
                </div>
            </>
        )
    }
}
