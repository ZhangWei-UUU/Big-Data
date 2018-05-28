import React, { Component } from "react";
import HeaderNav from "../Components/Layout/HeaderNav";
import SecondView from "../Components/Advert/SecondView";
import {INTRO_COM} from "../Data";
class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (<div>
            <HeaderNav/>
            <SecondView title={INTRO_COM.title} vice={INTRO_COM.vice}/>
            <div className="content-inner">
                <h2 className="u-title">{INTRO_COM.content.title}</h2>
                <p style={{marginBottom:"100px",fontSize:"16px",lineHeight:"32px"}}>{INTRO_COM.content.text}</p>
    
                <h2 className="u-title">{INTRO_COM.coreTech.title}</h2>
                <ul>
                    {INTRO_COM.coreTech.text.map(l=>{
                        return(
                            <li key={l.key} style={{fontSize:"16px"}}>{l.t}</li>);
                    })}
                </ul>
            </div>

        </div>);
    }
}

export default Introduction;
