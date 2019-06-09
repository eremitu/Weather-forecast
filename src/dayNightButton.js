import React from 'react';




export class DayNightButton extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            day: true,
        }
    this.setDay = this.setDay.bind(this);

    this.attachRef = target => this.setState({ target });
    this.state = {
      show: false,
    };
}

    setDay() {
        if (this.state.day === true) this.setState({day: false})
        else this.setState({day: true})
        this.props.isDay(this.state.day);
    }

    render() {
        const isDay = this.state.day;
        const DayButton = () => (
            <button 
                id='dayButton'
                type="button" 
                onClick={this.setDay} 
                className="btn btn-primary btn-sm"
                title="Click to see night weather"
            >
                Day weather
            </button>
        );
        const NightButton = () => (
            <button 
                id='nightButton'
                type="button"
                rel='tooltip' 
                onClick={this.setDay} 
                className="btn btn-secondary btn-sm" 
                data-toggle="tooltip" 
                data-placement="right" 
                title="Click to see day weather"
            >
                 Weather at night
            </button>
        );
        let bodyElement = document.body
        if(isDay) {
            bodyElement.style.background = "url('https://images.pexels.com/photos/29435/landscape-sky-night-stars-29435.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260')";
            bodyElement.style.backgroundSize = '100% 100%';
            bodyElement.style.backgroundRepeat = 'no-repeat';       
        }
        else if (!isDay){
            document.body.style.background = "url('https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260')";
            bodyElement.style.backgroundSize = '100% 100%';
            bodyElement.style.backgroundRepeat = 'no-repeat';  
        }
        return (
            <div> 
                {isDay ? (
                    <NightButton />
                ) : (
                    <DayButton />
                )}
            </div>
        )
    }

}
