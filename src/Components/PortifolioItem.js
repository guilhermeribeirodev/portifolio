import React, {Component} from "react";
import {portifolio} from "../Text";

export default class PortifolioItem extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.portifolio = portifolio;
        //this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <>
                <div className="portifolio">
                    {this.portifolio.map(item => (
                        <div className="portifolio-item">
                            <h3><a href={item.link} target="_blank">{item.company}</a><em>{item.date}</em></h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
