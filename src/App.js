import React from 'react';
//import ReactDOM from 'react-dom'
import {Geo}  from './geolocation'

export class App extends React.Component {
 /*constructor(props) {
     super(props);
 }*/
    render() {
        return (
            <div>
                <Geo />
                <h1>Hello wrld</h1>
            </div>
        )
    }

}



