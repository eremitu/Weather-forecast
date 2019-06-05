import React from 'react';
import {
  APIkey
} from './const.js'



export class DataService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    new Promise(async (resolve) => {
        await setTimeout(() => {
          resolve(this.props)
        }, 1000)
      })
      .then(
        async () => {
           let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.props.latitude}&lon=${this.props.props.longitude}&appid=${APIkey}`)
          if (response.ok) { 
            let json = await response.json();
            this.setState({
                     isLoaded: true,
                     items: json
                   });
          } else {
            this.setState({
              isLoaded: true,
              error: response.status
            });
            console.log("HTTP-Error: " + response.status);
          }
          
          
            // if (!response.ok) {console.log('jeopa')}
            // .then(async (res) => await res.json())
            // .then(
            //   (result) => {
            //     console.log(result)
            //     this.setState({
            //       isLoaded: true,
            //       items: result
            //     });
            //   },
            //   (error) => {
            //     this.setState({
            //       isLoaded: true,
            //       error
            //     });
            //   }
            // )
        }
      )
      .then(
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
              You are in {items.name ? items.name : 'nowhere'}.
              Temperature now is {items.main.temp ? items.main.temp : '??'} F
              Athmospheric pressure is {items.main.pressure ? items.main.pressure : '??'} mbar 
          </div>
    );
  }

}
}