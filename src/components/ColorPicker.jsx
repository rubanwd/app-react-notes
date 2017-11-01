import React from 'react';

import './ColorPicker.css';


const ColorPicker = React.createClass({
    render: function() {
        return (
            <div className="custom-radios">

                    <div>
                        <input type="radio" id="color-1" name="color" value="#2ecc71" defaultChecked onClick={this.props.colorPick} />
                        <label htmlFor="color-1">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                  
                    <div>
                        <input type="radio" id="color-2" name="color" value="#3498db" onClick={this.props.colorPick} />
                        <label htmlFor="color-2">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
                  
                    <div>
                        <input type="radio" id="color-3" name="color" value="#f1c40f" onClick={this.props.colorPick} />
                        <label htmlFor="color-3">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-4" name="color" value="#e74c3c" onClick={this.props.colorPick} />
                        <label htmlFor="color-4">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-5" name="color" value="#FFD27A" onClick={this.props.colorPick} />
                        <label htmlFor="color-5">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="color-6" name="color" value="#CFD8DD" onClick={this.props.colorPick} />
                        <label htmlFor="color-6">
                            <span>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                        </label>
                    </div>
            </div>
        );
    }
});

export default ColorPicker;