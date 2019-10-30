import React, { Component } from "react";
import Frame from "./Frame/Frame.js"
import "./Gallery.scss";


export default class Gallery extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    render() {

        return (
           <div className="gallery">
                   <Frame animId='0'/>
                   <Frame animId='1'/>
                   <Frame animId='2'/>
                   <Frame animId='3'/>
                   <Frame animId='4'/>
           </div>
        );
    }
}
