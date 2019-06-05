import React from 'react';
//import ReactDOM from 'react-dom'
import {Geo}  from './geolocation'
import {DataService} from './dataService'
import {Search} from './Search'



export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            input: '',
        }

    }
    
    
    getInput = (input) => {
        this.setState({
            input
        })
        console.log('input is in APP')
    }


    loadPosition = (latitude, longitude) => {
         this.setState({
            latitude,
            longitude
        })
    }


    render() {
        return (
            <div>
                <Geo liftingData={this.loadPosition}/>
                <DataService 
                     props={this.state}
                />
                <Search liftingData={this.getInput}/>              
            </div>
        )
    }

}



