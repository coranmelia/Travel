import React from "react";
import "./Story.scss";

const Story = (props) => {
    return (
            <div className="story">
                <div className="left">
                    <h2> Six Memorable Places Near Las Vegas </h2>
                    <p>Last year after I graduated from college,
                        my friend and I thought about going on a trip and considered the Las Vegas
                        because we both felt that we really need to release some pressures.
                        We were really overwhelmed by our thesis and and did not have a plan.
                        Until the day of graduation ceremony, I didn't even know whether we are actually going or not.
                        Well, two days later, I was on the flight to Las Vegas. It took us 9 days, driving 2000 miles,
                        to traverse Utah, Nevada, and Arizona. And I wish this trip can bring you some insights for your
                        next visit :)
                    </p>

                </div>
                <div className="right">
                    <ul>
                        <li>
                            <div className="num">1. </div>
                            <div>
                                <div className="place"> The Grand Canyon</div>
                                <div className="description"> The world's most beautiful sunset</div>
                            </div>
                        </li>
                        <li>
                            <div className="num">2. </div>
                            <div>
                                <div className="place"> Antelope Canyon</div>
                                <div className="description"> The thrilling light and shadow</div>
                            </div>
                        </li>
                        <li>
                            <div className="num">3. </div>
                            <div>
                                <div className="place"> The Bryce Canyon</div>
                                <div className="description"> Red Rocks, Pink CLiffs, and Endliess Vistas</div>
                            </div>
                        </li>
                        <li>
                            <div className="num">4. </div>
                            <div>
                                <div className="place"> Zion National Forest</div>
                                <div className="description"> Follow the paths where the pioneers walked</div>
                            </div>
                        </li>
                        <li>
                            <div className="num">5. </div>
                            <div>
                                <div className="place"> Picasso</div>
                                <div className="description"> Best restaurant in Las Vegas </div>
                            </div>
                        </li>
                        <li>
                            <div className="num">6. </div>
                            <div>
                                <div className="place"> Wynn Las Vegas</div>
                                <div className="description"> Spa, Casino, Buffet, and Shopping</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

    );
};
export default Story;
