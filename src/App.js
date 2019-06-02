import React from 'react';
//import ReactDOM from 'react-dom'
import {Geo}  from './geolocation'
import {DataService} from './dataService'


export class App extends React.Component {




    render() {
        return (
            <div>
                <Geo />
                <DataService />
                <h1>Hello wrld</h1>
            </div>
        )
    }

}



