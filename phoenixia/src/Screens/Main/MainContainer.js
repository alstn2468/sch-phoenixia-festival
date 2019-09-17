import React from "react";
import MainPresenter from "./MainPresenter";

export default class extends React.Component {
    state = {
        time: 0,
        error: null,
        timetable: 0
    };

    leftButtonClick = () => {
        this.setState(state => ({
            timetable: parseInt((state.timetable - 1 + 3) % 3)
        }));
    };

    rightButtonClick = () => {
        this.setState(state => ({
            timetable: parseInt((state.timetable + 1) % 3)
        }));
    };

    componentDidMount() {
        let error;
        const festival = new Date(2019, 8, 30);

        try {
            let now = new Date();
            this.setState({ time: festival - now.getTime() });
        } catch (e) {
            error = e;
            this.setState({ error });
        } finally {
        }
    }

    render() {
        const { time, error, timetable } = this.state;

        return (
            <MainPresenter
                time={time}
                error={error}
                timetable={timetable}
                leftButtonClick={this.leftButtonClick}
                rightButtonClick={this.rightButtonClick}
            />
        );
    }
}
