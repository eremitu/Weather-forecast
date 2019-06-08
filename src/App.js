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


        let imgUrl = 'https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
        let styles = {         
                backgroundImage: 'url(' + imgUrl + ')',
                backgroundImage: {
                    flex: 1,
                    resizeMode: 'cover', // or 'stretch'
                },


            }
        this.styles=styles
        
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
            <div style={this.styles}>
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



