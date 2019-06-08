import React from 'react';
//import ReactDOM from 'react-dom'
import {Geo}  from './geolocation'
import {DataService} from './dataService'
import {Search} from './Search'
import {DayNightButton} from './dayNightButton'


export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            input: '',
            day: true,
        }
 
    }
    
    getInput = (input) => {
        this.setState({
            input
        })
    }

    getTimeOfDay = (day) => {
        this.setState({
            day
        })
    }

    getPosition = (latitude, longitude) => {
         this.setState({
            latitude,
            longitude
        })
    }

    render() {
        return (
            <div >
                <DayNightButton isDay={this.getTimeOfDay}/>
                <Geo liftingData={this.getPosition}/>
                <Search liftingData={this.getInput}/>
                <DataService 
                     props={this.state}
                />
                              
            </div>
        )
    }
}



