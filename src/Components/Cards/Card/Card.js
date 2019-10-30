import React from "react";
import CardData from "./CardData.js"
import Popup from '../Popup/Popup.js';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showPopup: false,
            cheight: 0,
            cardId:0,
            popStyle: {
                top: '0'
            },
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ cheight: window.innerHeight });
        // console.log(window.innerHeight);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    showCard(card, idx){
        this.togglePopup.bind(this);
        const title = CardData()[idx].title;
        this.setState({
            cardId:idx,
            showPopup: true,
            title: title,
        });
        // console.log(card);
        this.setHeight();
    }

    setHeight(){
        this.updateWindowDimensions();
        let height = this.state.cheight;
        // console.log("current height is: " +height);
        height *= 2;
        this.setState({
            popStyle: {
                top: height + 'px'
            }
        });
        // console.log(this.state.popStyle);
    }

    render() {
        const cardData = CardData();
        return (
            <div>
                {
                    cardData.map((card, i) => {
                        return (
                                <div className="card" id="card" style={this.props.cardStyle} key={i}>
                                    <p className="title">{card.title}</p>
                                    <a href="#">
                                        <img src={card.url}
                                             onClick={() => this.showCard(this, i)}/>
                                    </a>
                                </div>
                        )
                    })
                }

                {
                    this.state.showPopup ?
                        <Popup
                            text={this.state.title}
                            closePopup={this.togglePopup.bind(this)}
                            style={this.state.popStyle}
                            content={this.state.cardId}
                        />
                        : null
                }
            </div>
        )
    }
}

export default Card;
