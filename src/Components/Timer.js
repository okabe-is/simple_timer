import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';

class Timer extends Component {

    constructor() {
        super();
        this.state = {
            input_num: 1, //inputフィールド用 単位は s 
            countdown: 1000, //このmsまでカウントダウンする
            time_ms: 0, // START後の経過時間 単位は ms
            startAt: 0, // STOPしても経過時間を正しく計測するために使用
            isOn: false, // カウントダウン中ならTrueとなるフラグ
        }
    }

    startTimer = () => {
        console.log("start");
        this.setState({
            //経過時間を蓄積するための処理
            startAt: Date.now() - this.state.time_ms,
            isOn: true,

        })
        // 多重クリックを考慮
        clearInterval(this.timer);

        this.timer = setInterval(
            () => {

                //経過時間
                let spent_time = Date.now() - this.state.startAt;

                console.log(spent_time);
                this.setState({
                    time_ms: spent_time < this.state.countdown ? spent_time : this.state.countdown,
                });

                // 経過時間が目標値となったらカウントダウンを止める
                if (this.state.time_ms >= this.state.countdown) {
                    clearInterval(this.timer);
                }
            }, 1);
    }

    stopTimer = () => {
        console.log("stop");
        clearInterval(this.timer);
        this.setState({
            isOn: false,
        })
    }

    restTimer = () => {
        console.log("reset");
        clearInterval(this.timer);
        this.setState({
            time_ms: 0,
            isOn: false,
        })

    }

    // 目標値変更をハンドリングする
    countdownChangeHandler = (event) => {
        console.log("time is changed.");
        this.setState({
            input_num: event.target.value,
            countdown: event.target.value * 1000,
        })

    }

    render() {

        let rest_of_time = this.state.countdown - this.state.time_ms;
        let style = {
            color: rest_of_time ? "black" : "red"
        }

        return (
            <div>
                <input type="number" min="1"
                       onChange={this.countdownChangeHandler}
                       value={this.state.input_num}/> sec

                <h3 style={style}>timer: {Math.ceil(rest_of_time / 1000)} s</h3>
                {this.state.isOn ||
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.startTimer}>
                    start</Button>
                }

                {this.state.isOn &&
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={this.stopTimer}>
                    stop</Button>
                }

                <Button
                    variant="outlined"
                    color="default"
                    onClick={this.restTimer}>
                    reset</Button>

            </div>
        );
    }
}

export default Timer;