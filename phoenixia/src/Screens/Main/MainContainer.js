import React from "react";
import MainPresenter from "./MainPresenter";

export default class extends React.Component {
    state = {
        time: 0,
        error: null
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
        const { time, error } = this.state;

        return <MainPresenter time={time} error={error} />;
    }
}
