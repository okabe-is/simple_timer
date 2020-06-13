import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';

class Timer extends Component {

    constructor() {
        super();
        this.state = {
            time_s: 0,
            startAt: 0,
            isOn: false,
        }
    }

    startTimer = () => {
        console.log("start");
        this.setState({
            startAt: Date.now() - this.state.time_s,
            isOn: true,
        })
        // 多重クリックを考慮
        clearInterval(this.timer);

        this.timer = setInterval(
            () => this.setState(
                {
                    time_s: Date.now() - this.state.startAt
                }),
            1);
    }

    stopTimer = () => {
        console.log("stop");
        clearInterval(this.timer);
    }

    restTimer = () => {
        console.log("reset");
        clearInterval(this.timer);
        this.setState({
            time_s: 0,
            isOn: false,
        })

    }

    render() {

        return (
            <div>
                <h3>timer: {Math.floor(this.state.time_s/1000)}s</h3>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.startTimer}>
                    start</Button>

                {this.state.isOn &&
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.stopTimer}>
                    stop</Button>
                }
                {this.state.isOn &&
                <Button
                    variant="outlined"
                    color="default"
                    onClick={this.restTimer}>
                    reset</Button>
                }
            </div>
        );
    }
}

export default Timer;