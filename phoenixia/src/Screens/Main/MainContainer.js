import React from "react";
import MainPresenter from "./MainPresenter";

export default class extends React.Component {
    state = {
        time: 0,
        error: null,
        timetable: null
    };

    componentDidMount() {
        let error;
        const festival = new Date(2019, 8, 30);

        try {
            let now = new Date();
            let month = now.getMonth() + 1;
            let date = now.getDate();
            let timetable;

            switch (month) {
                case 9:
                    timetable = 0;
                    break;
                case 10:
                    if (date === 1) {
                        timetable = 1;
                    } else {
                        timetable = 2;
                    }
                    break;
                default:
                    timetable = 3;
                    break;
            }
            this.setState({ time: festival - now.getTime(), timetable });
        } catch (e) {
            error = e;
            this.setState({ error });
        } finally {
        }
    }

    render() {
        const { time, error, timetable } = this.state;

        return (
            <MainPresenter time={time} error={error} timetable={timetable} />
        );
    }
}
