import React, { Component } from 'react';
import { Pager } from "react-bootstrap";
import './App.scss';
import Home from './Components/Home/Home.js'
import Cards from './Components/Cards/Cards.js'
import Story from './Components/Story/Story.js'
import ReactPageScroller from "react-page-scroller";
import Gallery from "./Components/Gallery/Gallery";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        // console.log(this._pageScroller);
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPageNumbers = () => {

        const pageNumber = [];
        const pageNames = ["HOME", "STORY", "EXPLORE", "GALLERY"];

        for (let i = 1; i <= 4; i++) {
            pageNumber.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>
                    { pageNames[i-1] }
                </Pager.Item>
            )
        }

        return [...pageNumber];
    };

    getArrow = () => {

        const i = this.state.currentPage;
        const pageNumber = [];
        const pageNames = ["HOME", "STORY", "EXPLORE", "GALLERY"];

         pageNumber.push(
                <Pager.Item key={i+1} eventKey={i} onSelect={this.goToPage}>
                    { pageNames[i] }
                </Pager.Item>
         );

        return [...pageNumber];
    };


    render() {
        const pageNumber = this.getPageNumbers();
        const pageNext = this.getArrow();

        return <React.Fragment>

            <div className="App">
                <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                   <Home/>
                   <Story/>
                   <Cards/>
                   <Gallery/>
                </ReactPageScroller>
            </div>

            <Pager className="navbar" bsSize="large">
                { pageNumber }
            </Pager>

            {
                this.state.currentPage === 4
                    ? null
                    :(
                    <Pager className="scroll-pager">
                        <div className="scroll arr">
                            <div>
                                <span id="s1"></span>
                                <span id="s2"></span>
                                {pageNext}
                            </div>
                        </div>
                    </Pager>
                    )
            }

            {
                this.state.currentPage !== 2
                    ? null
                    :(
                        <Pager>
                            <button id="explore">
                                {pageNext}
                                <span> -> </span>
                            </button>
                        </Pager>
                    )

            }



        </React.Fragment>
    }
}

export default App;
