import React from 'react';
//import ReactDOM from 'react-dom'
import {Geo}  from './geolocation'
import {DataService} from './dataService'



export class App extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        latitude: null,
        longitude: null
    }


    setTimeout(()=> {console.log(this.state)}, 1210)

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
            </div>
        )
    }

}



