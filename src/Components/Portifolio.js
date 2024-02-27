import React from "react";
import PortifolioItem from "./PortifolioItem";
import { portifolio } from "../Text";

export default function Portifolio (){
    return (
        <div className="section">
            <div className="section-content" id="portifolio">
                <h1>Portifolio</h1>
                <PortifolioItem />
            </div>
        </div>
    )
}
