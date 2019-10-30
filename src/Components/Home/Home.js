import React, { Component } from "react";
import Jumbo from "../../icon/img/01.jpg"
import "./Home.scss";



class Home extends Component {

    render() {

            return <React.Fragment>
                <div className="Home">
                    <div className="main">

                        <div className="jumbo">
                            <img style={{height: 'auto', width: '100%'}} src={Jumbo} alt="jumbotron"/>
                        </div>
                        {/* end jumbotron */}

                        <div className="clear"></div>

                        <div id="title">
                            <p>GONE WITH</p>
                            <p>THE WIND</p>
                            <p id="intro">This is probably the most unanticipated trip that I've ever had.
                                I drove 2000 miles in 9 days traversing three states to find some virtues. And I'm glad
                                that I'm still crazy for those good old days.</p>
                        </div>
                    </div>
                    {/* End main */}

                </div>
                </React.Fragment>
    }
};
export default Home;
