import React from "react";
import "./Frame.scss"
import GalleryData from "../GalleryData.js";

export default class Frame extends React.Component {
    constructor(props) {
        super(props);
        const idxStart = 0;

        this.state = {
            index: idxStart,
            next: this.getNextIndex(idxStart),
            move: false,
            // picId: idx
        };

    }

    getNextIndex(idx) {
        const animId = this.props.animId;
        if (idx >= GalleryData()[animId].length - 1) {
            return 0;
        }
        return idx + 1;
    }

    setIndexes(idx) {
        this.setState({
            index: idx,
            next: this.getNextIndex(idx)
        });
    }

    componentDidMount() {
        setInterval(() => {
            // on
            this.setState({
                move: true,
            });

            // off
            setTimeout(() => {
                this.setState({
                    move: false
                });
                this.setIndexes(this.getNextIndex(this.state.index));
            }, 1000); // same delay as in the css transition here

        }, 8000);
    }

    render() {
        const animId = this.props.animId;
        const data =  GalleryData()[animId];
        const move = this.state.move ? 'move' : '';
        const frameId = "frame"+animId;

        return (
            <div className={`mask frame ${frameId}`}>
                <div className="pic-wrapper">
                    <div className={`current pict ${move}`}>
                        <img src={data[this.state.index].url}
                             alt={data[this.state.index].data}
                             />
                    </div>
                    <div className={`next pict ${move}`} >
                        <img src={data[this.state.next].url}
                             alt={data[this.state.next].data} />
                    </div>

                </div>
            </div>
        );
    }
}

