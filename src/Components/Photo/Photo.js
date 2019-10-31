import React, { Component } from 'react';
import "./Photo.scss"

export default class Photo extends Component {

    constructor(props){
        super(props);
        const id = this.props.source;
        if(id === '0'){
            this.state = {
                x: require.context("../../icon/sub/1")
            };
        } else if (id === '1'){
            this.state = {
                x: require.context("../../icon/sub/2")
            };
        } else if (id === '2'){
            this.state = {
                x: require.context("../../icon/sub/3")
            };
        } else if (id === '3'){
            this.state = {
                x: require.context("../../icon/sub/4")
            };
        } else if (id === '4'){
            this.state = {
                x: require.context("../../icon/sub/5")
            };
        } else {
            this.state = {
                x: require.context("../../icon/sub/6")
            };
        }
    }


    render() {


        const images = [
            {src: './1.jpg', alt: 'Your description here 1' },
            {src: './2.jpg', alt: 'Your description here 2' },
            {src: './3.jpg', alt: 'Your description here 3' }
        ];

        return (
            images.map((img, i) => {
                return(
                        <div className="pic" key={ i } >
                            <img className={ "x"+i } src={ this.state.x(img.src) } alt={ img.alt }/>
                            {/*{*/}
                            {/*    i < 2*/}
                            {/*        ? <img className="left" src={ this.state.x(img.src) } alt={ img.alt }/>*/}
                            {/*        : <img className="right" src={ this.state.x(img.src) } alt={ img.alt }/>*/}
                            {/*}*/}

                        </div>
                    )
            })
        )
    }
}
