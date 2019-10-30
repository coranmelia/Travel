import React, { Component } from "react";
import Frame from "./Frame/Frame.js"
import "./Gallery.scss";


export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
           <div className="gallery">
                {/*<div className="ga-frame">*/}
                   <Frame animDuration={1} animId='0'/>
                   <Frame animDuration={1} animId='1'/>
                   <Frame animDuration={1} animId='2'/>
                   <Frame animDuration={1} animId='3'/>
                   <Frame animDuration={1} animId='4'/>
                {/*</div>*/}
           </div>
        );
    }
}
