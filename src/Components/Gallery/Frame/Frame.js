import React from "react";
import "./Frame.scss"
import GalleryData from "../GalleryData.js";
import ReactSVG from "react-svg";
import like from "../../../icon/svg/like.svg";


export default class Frame extends React.Component {
    constructor(props) {
        super(props);
        const idxStart = 0;
        // const idx = new Array(25);
        // localStorage.setItem('likeArray', JSON.stringify(idx));

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

    // FUTURE-TO-DO implement like system
    // getLike = (id) => {
    //     // return an integer
    //     const like = parseInt(this.state.picId[id]);
    //     return like;
    // };

    // handleIncrement = (id) => {
    //     // extract the id array, get the id element and increment by 1
    //     // then put it back into the array, store the array in state
    //     let likeArr = this.state.picId;
    //     likeArr[id] = ""+(parseInt(likeArr[id]) + 1);
    //
    //     // store in storage
    //     this.setState({picId: likeArr});
    //
    //     localStorage.setItem('likeArray', JSON.stringify(this.state.picId));
    // };
    //
    // svgOnChange = (id) => {
    //     // increment this in state
    //     this.handleIncrement(id);
    //     const tNum = 't'+id;
    //
    //     // change the text in element id extracted
    //     let temp = localStorage.getItem('likeArray')[id] || '';
    //     const el = document.getElementsByClassName(tNum);
    //
    //     // el.innerHTML = temp;
    //     console.log(el);
    // };


    render() {
        const animId = this.props.animId;
        const data =  GalleryData()[animId];
        const move = this.state.move ? 'move' : '';
        const frameId = "frame"+animId;

        return (
            <div className={`mask frame ${frameId}`}>
                <div className="pic-wrapper">
                    <div className={`current pict ${move}`}>
                        {/*<ReactSVG src={ like }></ReactSVG>*/}
                        {/*<svg><text x="11" y="18" fill="white" className={ "t"+data[this.state.next].id }>1</text></svg>*/}
                        <img src={data[this.state.index].url}
                             alt={data[this.state.index].data}
                             />
                    </div>
                    <div className={`next pict ${move}`} >
                        {/*<ReactSVG src={ like }></ReactSVG>*/}
                        {/*<svg><text x="11" y="18" fill="white" className={ "t"+data[this.state.next].id }>1</text></svg>*/}
                        <img src={data[this.state.next].url}
                             alt={data[this.state.next].data} />
                    </div>

                </div>
            </div>
        );
    }
}

