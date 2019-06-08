import React from 'react';


export class DayNightButton extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            day: true
        }
    this.setDay = this.setDay.bind(this);
    }

    setDay() {
        if (this.state.day === true) this.setState({day: false})
        else this.setState({day: true})
        this.props.isDay(this.state.day);
    }

    render() {
        const isDay = this.state.day;

        return (
            <div>
                {isDay ? (
                    <button type="button" onClick={this.setDay} className="btn btn-secondary btn-sm">Night</button>
                ) : (
                    <button type="button" onClick={this.setDay} className="btn btn-primary btn-sm">Day</button>
                )}
            </div>
        )
    }

}