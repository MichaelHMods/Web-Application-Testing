import React, {Component} from "react";


class Dashboard extends Component {
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
                <button>STRIKE</button>
                <button>BALL</button>
                <button>FOUL</button>
                <button>HIT</button>
            </div>
        );
    }
}

export default Dashboard;
