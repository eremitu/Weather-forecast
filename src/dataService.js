import React from 'react';
import axios from 'axios';
import {APIkey} from './const.js'


export class DataService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
        /*let data = {
            lat: 51.1491281,
            lon: 17.1071266
        }
        this.data = data*/
        this.componentDidMount = this.componentDidMount.bind(this);


    }

    componentDidMount() {
        let data = {
            lat: 51.1491281,
            lon: 17.1071266
        }

        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${APIkey}`)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )



        //getData(data)

    }

    render() {
        const {
            error,
            isLoaded,
            items
        } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
              <ul>
                {items.map(item => (
                  <li key={item.name}>
                    
                  </li>
                ))}
              </ul>
            );
          }

    }
}
