import React from "react";
import "./Frame.scss"
import GalleryData from "../GalleryData.js";

export default class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.backgrounds = GalleryData();
        this.state = {
            backgroundIndex: 0,
            move: false,
        };

        this.changeBackground = this.changeBackground.bind(this)
    }

    // change every 5s
    componentDidMount () {

        this.timeout = setTimeout(
            this.changeBackground,
            this.props.animDuration * 5000
        )
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    changeBackground () {
        this.setState(function ({ backgroundIndex }) {
            const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length;

            return {
                backgroundIndex: nextBackgroundIndex,
                move:true
            }
        }, function () {
            this.timeout = setTimeout(
                this.changeBackground,
                this.props.animDuration * 5000
            )
        })
    }

    render () {
        return (
            <div className="mask">
                    <img className=""
                         src={ this.backgrounds[this.state.backgroundIndex].url }
                         alt = {this.backgrounds[this.state.backgroundIndex].title}/>
            </div>

        )
    }
}
