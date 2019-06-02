import React from 'react';
import {APIkey} from './const.js'



export class DataService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        setTimeout(()=> {console.log(this.props.props.latitude)}, 1120)
    }

   componentDidMount() {
        /*let data = {
            lat: 51.1491281,
            lon: 17.1071266
        }*/
         new Promise( async (resolve) => {
           await setTimeout(()=>{resolve(this.props)}, 1000)    //setTimeout(()=>{resolve(this.props)}, 1000)
          })
            .then ( 
                async () => {
                    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.props.latitude}&lon=${this.props.props.longitude}&appid=${APIkey}`)
                }
            )
            .then( async (res) => await res.json() )  
            .then(
               async (result) => {
                    console.log(result)
                   await this.setState({
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
            return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>);
          } else {
            return (
                <div className="container-fluid data">
                    You are in {items.name}.
                    Temperature now is {items.main.temp} F
                    Athmospheric pressure is {items.main.pressure} mbar 
                </div>
            );
          }

    }
}