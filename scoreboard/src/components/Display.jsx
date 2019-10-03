import React from 'react';



class Display extends Component {
    constructor() {
        super();
        this.state = {
            strike: "",
            ball: "",
            foul: "",
            hit: "",
        };
    }

    render() {
        return (
            <div className="main-container">
                <h1>STRIKE</h1>
                <h1>BALL</h1>
                <h1>FOUL</h1>
                <h1>HIT</h1>
            </div>
        );
    }
}

export default Display;
